export default {
    state: {
        ID: "1850002", //用户标识符
        membertype: null, //1是学生，2是组织，3是场地管理员，4是系统管理员
        token: null
    },
    setID(value) {
        this.ID = value;
    },
    clearID() {
        this.ID = null;
    },
    setMembertype(type) {
        this.membertype = type;
    },
    clearMembertype() {
        this.membertype = null;
    }
}