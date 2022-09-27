import { actionClient } from 'utils/api';
import {
  ActionDmlCreateRequest,
  ActionDmlUpdateRequest,
  Email,
  Sms,
  Voice,
  Ping,
  Action,
  ActionType,
  PartyAssociationType,
  AssociationMode,
} from 'utils/action_pb';
import {
  CommonSearchRequest,
  CommonPartyAssociateRequest,
  CommonStatusChangeRequest,
  CommonSearchListRequest,
} from 'utils/common_pb';
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

  async saveEmailAction(body) {
    const email = new Email();
    email.setEmailmessagesubject(body.title);
    email.setEmailmessagebody(body.description);

    const action = new Action();
    action.setEmail(email);
    action.setRecordtype(ActionType.EMAIL);

    return await this.saveAction(action, body);
  },

  async saveSmsAction(body) {
    try {
      const sms = new Sms();
      sms.setSmsmessagetitle(body.title);
      sms.setSmsmessage(body.description);

      const action = new Action();
      action.setSms(sms);
      action.setRecordtype(ActionType.SMS);

      return await this.saveAction(action, body);
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  },

  async saveVoiceMessageAction(body) {
    try {
      const voice = new Voice();
      voice.setVoicemessage(body.title);
      voice.setVoicemessagetitle(body.description);

      const action = new Action();
      action.setVoice(voice);
      action.setRecordtype(ActionType.VOICE);

      return await this.saveAction(action, body);
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  },

  async savePingMessageAction(body) {
    try {
      const ping = new Ping();
      ping.setPingcode(body.code);
      ping.setPingmessage(body.message);

      const action = new Action();
      action.setPing(ping);
      action.setRecordtype(ActionType.PING);

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
      } else {
        const me = AuthService.getUserInfo();
        action.setPartypk(me.recordpk);
      }

      let result = null;
      if (data.recordPk) {
        const updateActionRequest = new ActionDmlUpdateRequest();
        updateActionRequest.setAuthdetail(authDetail);
        updateActionRequest.setAction(action);

        result = await actionClient.updateRecord(updateActionRequest);
      } else {
        const createActionRequest = new ActionDmlCreateRequest();
        createActionRequest.setAuthdetail(authDetail);
        createActionRequest.setRequestmessage(data.message || 'Create Action');
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

    const result = await actionClient.changeActionStatus(request);

    return result.toObject();
  },
};

export default ActionService;
