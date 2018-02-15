"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageData {
    constructor(TenantName, TenantID, IsTimeMahcinedEnabled, DateTime, JSON) {
        this.TenantName = TenantName;
        this.TenantID = TenantID;
        this.IsTimeMahcinedEnabled = IsTimeMahcinedEnabled;
        this.DateTime = DateTime;
        this.JSON = JSON;
    }
}
exports.MessageData = MessageData;
class MessageModel {
    constructor() {
    }
}
exports.MessageModel = MessageModel;
class Message {
    constructor(MessageId, TenantName, TenantID, EntityID, EntityType, DataType, MessageKind, Routing, PayLoad, ClientID) {
        this.MessageId = MessageId;
        this.TenantName = TenantName;
        this.TenantID = TenantID;
        this.EntityID = EntityID;
        this.EntityType = EntityType;
        this.DataType = DataType;
        this.MessageKind = MessageKind;
        this.Routing = Routing;
        this.PayLoad = PayLoad;
        this.ClientID = ClientID;
    }
}
exports.Message = Message;
class MessageType {
}
MessageType.CREATE_OR_READ = 'CREATE_OR_READ';
MessageType.CREATE = 'CREATE';
MessageType.READ = 'READ';
MessageType.UPDATE = 'UPDATE';
MessageType.DELETE = 'DELETE';
MessageType.SELECT = 'SELECT';
exports.MessageType = MessageType;
class Type {
}
Type.Batch = 'Batch';
exports.Type = Type;
class Routing {
    static getRouting(operation) {
        switch (operation) {
            case "READ":
                return Routing.OriginSession;
            case "CREATE":
                return Routing.AllButOriginSession;
            case "UPDATE":
                return Routing.AllButOriginSession;
        }
    }
}
Routing.ALL = 'AllFrontEnd';
Routing.OriginSession = 'OriginSession';
Routing.AllButOriginSession = 'AllButOriginSession';
Routing.AllFrontEndButOrigin = 'AllFrontEndButOrigin';
exports.Routing = Routing;
//# sourceMappingURL=Message.js.map