

export class MessageData {

    constructor(
        public TenantName,
        public TenantID,
        public IsTimeMahcinedEnabled,
        public DateTime,
        public JSON) {
    }
}



export class MessageModel {
    public MessageId;
    public TenantName;
    public TenantID;
    public EntityID;
    public EntityType;
    public DataType;
    public MessageKind;
    public Routing;
    public Type;
    public UserID;
    public PayLoad;
    public ClientID;
    constructor(
    ) {
    }

}

export class Message {
    public Type;
    constructor(public MessageId,
        public TenantName,
        public TenantID,
        public EntityID,
        public EntityType,
        public DataType,
        public MessageKind,
        public Routing,
        public PayLoad,
        public ClientID
    ) {
    }

}

export class MessageType {

    public static CREATE_OR_READ = 'CREATE_OR_READ';

    public static CREATE = 'CREATE';

    public static READ = 'READ';

    public static UPDATE = 'UPDATE';

    public static DELETE = 'DELETE';

    public static SELECT = 'SELECT';

}

export class Type {


    public static Batch = 'Batch'
}

export class Routing {
    public static ALL = 'AllFrontEnd';
    public static OriginSession = 'OriginSession';
    public static AllButOriginSession = 'AllButOriginSession';
    public static AllFrontEndButOrigin = 'AllFrontEndButOrigin';

    static getRouting(operation) {

        switch (operation) {
            case "READ":
                return Routing.OriginSession
            case "CREATE":
                return Routing.AllButOriginSession
            case "UPDATE":
                return Routing.AllButOriginSession
        }
        }
  }