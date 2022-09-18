import { ruleClient } from 'utils/api';
import {
  CommonSearchListRequest,
  RuleDmlCreateRequest,
  RuleDmlUpdateRequest,
  CommonSearchRequest,
  CommonPartyAssociateRequest,
  CommonStatusChangeRequest,
  Temporal,
  Weather,
  Location,
  Rule,
  RuleType,
  PartyAssociationType,
  AssociationMode,
} from 'utils/rule_pb';
import AuthService from './auth';

const RuleService = {
  async getRule(id) {
    try {
      const authDetail = AuthService.getAuthDetail();

      const getRuleRequest = new CommonSearchRequest();
      getRuleRequest.setId(id);
      getRuleRequest.setAuthdetail(authDetail);

      const result = await ruleClient.getSingleRecord(getRuleRequest);

      return result.toObject();
    } catch (err) {
      console.error(err);
    }
  },

  async getRules({ skip, limit, keyword }) {
    const authDetail = AuthService.getAuthDetail();

    const listRuleRequest = new CommonSearchListRequest();

    listRuleRequest.setSkip(skip);
    listRuleRequest.setLimit(limit);
    listRuleRequest.setSearchscope(0);
    listRuleRequest.setFilter(keyword);
    listRuleRequest.setAuthdetail(authDetail);

    const result = await ruleClient.listRecords(listRuleRequest);

    return result.toObject();
  },

  async saveTemporalRule(body) {
    const temporal = new Temporal();
    temporal.setYear(body.year);
    temporal.setMonth(body.year);
    temporal.setDayofmonth(body.dayOfMonth);
    temporal.setDayofweek(body.dayOfWeek);
    temporal.setHour(body.hour);
    temporal.setMinute(body.minute);

    const rule = new Rule();
    rule.setTemporal(temporal);
    rule.setRecordtype(RuleType.TEMPORAL);

    return await this.saveRule(rule, body);
  },

  async saveWeatherRule(body) {
    try {
      const weather = new Weather();
      weather.setWeathertext(body.weather);
      weather.setTemperatureunit(body.unit);
      weather.setTemperaturefrom(body.fromTemperature);
      weather.setTemperatureto(body.toTemperature);

      const rule = new Rule();
      rule.setWeather(weather);
      rule.setRecordtype(RuleType.WEATHER);

      return await this.saveRule(rule, body);
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  },

  async saveRule(rule, data) {
    try {
      const authDetail = AuthService.getAuthDetail();

      if (!rule) {
        rule = new Rule();
      }

      rule.setTitle(data.title);
      rule.setDescription(data.description);
      rule.setRecordenabled(data.enabled);
      rule.setVisibility(data.private);
      rule.setPricecurrency(data.currency);
      rule.setUnitprice(data.price);

      if (data.recordPk) {
        rule.setRecordpk(data.recordPk);
      }

      if (data.partyPk) {
        rule.setPartypk(data.partyPk);
      }

      const location = new Location();
      location.setLocationcity(data.city);
      location.setLocationcountry(data.country);

      rule.setLocation(location);

      let result = null;
      if (data.recordPk) {
        const updateRuleRequest = new RuleDmlUpdateRequest();
        updateRuleRequest.setAuthdetail(authDetail);
        updateRuleRequest.setRule(rule);

        result = await ruleClient.updateRecord(updateRuleRequest);
      } else {
        const createRuleRequest = new RuleDmlCreateRequest();
        createRuleRequest.setAuthdetail(authDetail);
        createRuleRequest.setRequestmessage('Create Weather Rule');
        createRuleRequest.setRule(rule);

        result = await ruleClient.createRecord(createRuleRequest);
      }

      return result.toObject();
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  },

  async associateParty(id, type, flag) {
    const authDetail = AuthService.getAuthDetail();

    const request = new CommonPartyAssociateRequest();
    request.setId(id);
    request.setAuthdetail(authDetail);

    if (type === 'subscribe') {
      request.setPartyassociationtype(
        PartyAssociationType.SUBSCRIBER_OF_ASSOCIATION
      );
    }

    if (type === 'favorite') {
      request.setPartyassociationtype(
        PartyAssociationType.FAVOURITE_ASSOCIATION
      );
    }

    request.setAssociationmode(
      flag ? AssociationMode.LINK : AssociationMode.UNLINK
    );

    const result = await ruleClient.associateParty(request);

    return result.toObject();
  },

  async pushStatus(id, flag) {
    const authDetail = AuthService.getAuthDetail();

    const request = new CommonStatusChangeRequest();
    request.setId(id);
    request.setAuthdetail(authDetail);
    request.setStatus(flag);

    const result = await ruleClient.pushChangeRuleStatusRequest(request);

    return result.toObject();
  },
};

export default RuleService;
