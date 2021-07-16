export default {
    state: {
        ID: null, //用户标识符
        membertype: null, //1是学生，2是组织，3是场地管理员，4是系统管理员
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