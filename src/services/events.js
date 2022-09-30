import { eventClient } from 'utils/api';
import {
  CommonSearchListRequest,
  EventDmlCreateRequest,
  EventDmlUpdateRequest,
  CommonSearchRequest,
  CommonPartyAssociateRequest,
  CommonStatusChangeRequest,
  Location,
  Event,
  PartyAssociationType,
  AssociationMode,
} from 'utils/event_pb';
import AuthService from './auth';

const EventService = {
  async getEvent(id) {
    try {
      const authDetail = AuthService.getAuthDetail();

      const getEventRequest = new CommonSearchRequest();
      getEventRequest.setId(id);
      getEventRequest.setAuthdetail(authDetail);

      const result = await eventClient.getSingleRecord(getEventRequest);

      return result.toObject();
    } catch (err) {
      console.error(err);
    }
  },

  async getEvents({ skip, limit, keyword }) {
    const authDetail = AuthService.getAuthDetail();

    console.log('fire getEvents', authDetail);
    const listEventRequest = new CommonSearchListRequest();

    listEventRequest.setSkip(skip);
    listEventRequest.setLimit(limit);
    listEventRequest.setSearchscope(0);
    listEventRequest.setFilter(keyword);
    listEventRequest.setAuthdetail(authDetail);

    const result = await eventClient.listRecords(listEventRequest);

    return result.toObject();
  },

  async saveEvent(event, data) {
    try {
      const authDetail = AuthService.getAuthDetail();

      if (!event) {
        event = new Event();
      }

      event.setTitle(data.title);
      event.setDescription(data.description);
      event.setRecordenabled(data.enabled);
      event.setVisibility(data.private);
      event.setPricecurrency(data.currency);
      event.setUnitprice(data.price);

      if (data.recordPk) {
        event.setRecordpk(data.recordPk);
      }

      if (data.partyPk) {
        event.setPartypk(data.partyPk);
      }

      const location = new Location();
      location.setLocationcity(data.city);
      location.setLocationcountry(data.country);

      event.setLocation(location);

      let result = null;
      if (data.recordPk) {
        const updateEventRequest = new EventDmlUpdateRequest();
        updateEventRequest.setAuthdetail(authDetail);
        updateEventRequest.setEvent(event);

        result = await eventClient.updateRecord(updateEventRequest);
      } else {
        const createEventRequest = new EventDmlCreateRequest();
        createEventRequest.setAuthdetail(authDetail);
        createEventRequest.setRequestmessage('Create Event');
        createEventRequest.setEvent(event);

        result = await eventClient.createRecord(createEventRequest);
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

    const result = await eventClient.associateParty(request);

    return result.toObject();
  },

  async pushStatus(id, flag) {
    const authDetail = AuthService.getAuthDetail();

    const request = new CommonStatusChangeRequest();
    request.setId(id);
    request.setAuthdetail(authDetail);
    request.setStatus(flag);

    const result = await eventClient.pushChangeEventStatusRequest(request);

    return result.toObject();
  },
};

export default EventService;
