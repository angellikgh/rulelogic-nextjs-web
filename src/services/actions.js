import { actionClient } from 'utils/api';
import {
  CommonSearchListRequest,
  ActionDmlCreateRequest,
  ActionDmlUpdateRequest,
  CommonSearchRequest,
  CommonPartyAssociateRequest,
  CommonStatusChangeRequest,
  Temporal,
  Weather,
  Location,
  Action,
  ActionType,
  PartyAssociationType,
  AssociationMode,
} from 'utils/action_pb';
import AuthService from './auth';

const ActionService = {
  async getAction(id) {
    try {
      const authDetail = AuthService.getAuthDetail();

      const getActionRequest = new CommonSearchRequest();
      getActionRequest.setId(id);
      getActionRequest.setAuthdetail(authDetail);

      const result = await actionClient.getSingleRecord(getActionRequest);

      return result.toObject();
    } catch (err) {
      console.error(err);
    }
  },

  async getActions({ skip, limit, keyword }) {
    const authDetail = AuthService.getAuthDetail();

    const listActionRequest = new CommonSearchListRequest();

    listActionRequest.setSkip(skip);
    listActionRequest.setLimit(limit);
    listActionRequest.setSearchscope(0);
    listActionRequest.setFilter(keyword);
    listActionRequest.setAuthdetail(authDetail);

    const result = await actionClient.listRecords(listActionRequest);

    return result.toObject();
  },

  async saveTemporalAction(body) {
    const temporal = new Temporal();
    temporal.setYear(body.year);
    temporal.setMonth(body.year);
    temporal.setDayofmonth(body.dayOfMonth);
    temporal.setDayofweek(body.dayOfWeek);
    temporal.setHour(body.hour);
    temporal.setMinute(body.minute);

    const action = new Action();
    action.setTemporal(temporal);
    action.setRecordtype(ActionType.TEMPORAL);

    return await this.saveAction(action, body);
  },

  async saveWeatherAction(body) {
    try {
      const weather = new Weather();
      weather.setWeathertext(body.weather);
      weather.setTemperatureunit(body.unit);
      weather.setTemperaturefrom(body.fromTemperature);
      weather.setTemperatureto(body.toTemperature);

      const action = new Action();
      action.setWeather(weather);
      action.setRecordtype(ActionType.WEATHER);

      return await this.saveAction(action, body);
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  },

  async saveAction(action, data) {
    try {
      const authDetail = AuthService.getAuthDetail();

      if (!action) {
        action = new Action();
      }

      action.setTitle(data.title);
      action.setDescription(data.description);
      action.setRecordenabled(data.enabled);
      action.setVisibility(data.private);
      action.setPricecurrency(data.currency);
      action.setUnitprice(data.price);

      if (data.recordPk) {
        action.setRecordpk(data.recordPk);
      }

      if (data.partyPk) {
        action.setPartypk(data.partyPk);
      }

      const location = new Location();
      location.setLocationcity(data.city);
      location.setLocationcountry(data.country);

      action.setLocation(location);

      let result = null;
      if (data.recordPk) {
        const updateActionRequest = new ActionDmlUpdateRequest();
        updateActionRequest.setAuthdetail(authDetail);
        updateActionRequest.setAction(action);

        result = await actionClient.updateRecord(updateActionRequest);
      } else {
        const createActionRequest = new ActionDmlCreateRequest();
        createActionRequest.setAuthdetail(authDetail);
        createActionRequest.setRequestmessage('Create Weather Action');
        createActionRequest.setAction(action);

        result = await actionClient.createRecord(createActionRequest);
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

    const result = await actionClient.associateParty(request);

    return result.toObject();
  },

  async pushStatus(id, flag) {
    const authDetail = AuthService.getAuthDetail();

    const request = new CommonStatusChangeRequest();
    request.setId(id);
    request.setAuthdetail(authDetail);
    request.setStatus(flag);

    const result = await actionClient.pushChangeActionStatusRequest(request);

    return result.toObject();
  },
};

export default ActionService;
