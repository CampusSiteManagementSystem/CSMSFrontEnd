/**   
 * api接口统一管理
 */
import { Get, Post, DeleteID, PutID, GetID, Delete, Put } from './config'


//只有id可以直接传入 例如"1000007"  其他必须作为对象传入 例如{"accountNumber:1000001"}


/*Activities*/
export const GETActivities = param => Get('/api/Activities', param); //ok
export const POSTActivities = param => Post('/api/Activities', param); //ok
export const PUTActivitiesID = (ID, param) => PutID('/api/Activities/', ID, param); //ok
export const DELETEActivitiesID = ID => DeleteID('/api/Activities/', ID);
export const GETActivitiesID = ID => GetID('/api/Activities/', ID); //ok
/*CreditRecords*/
export const GETCreditRecords = param => Get('/api/creditrecords', param) //ok
export const POSTCreditRecords = param => Post('/api/creditrecords', param) //ok
export const GETCreditRecordsID = ID => GetID('/api/creditrecords/', ID) //ok

/*DefaultOccupyTime*/
export const GETDefaultOccupyTime = param => Get('/api/DefaultOccupyTimes', param); //ok
export const POSTDefaultOccupyTime = param => Post('/api/DefaultOccupyTimes', param); //ok
export const DELETEDefaultOccupyTime = param => Delete('/api/DefaultOccupyTimes', param); //ok

// ExamineAndApproves
export const GETExamineAndApproves = param => Get('/api/ExamineAndApproves', param); //ok
export const POSTExamineAndApproves = param => Post('/api/ExamineAndApproves', param); //ok
export const GETExamineAndApprovesID = ID => GetID('/api/ExamineAndApproves/', ID) //ok
export const PUTExamineAndApprovesID = (ID, param) => PutID('/api/ExamineAndApproves/', ID, param); //ok
export const DELETEExamineAndApprovesID = ID => DeleteID('/api/ExamineAndApproves/', ID); //ok

//FeedbackRecords
export const GETFeedbackRecords = param => Get('/api/FeedbackRecords', param); //ok
export const POSTFeedbackRecords = param => Post('/api/FeedbackRecords', param); //ok
export const GETFeedbackRecordsID = ID => GetID('/api/FeedbackRecords/', ID) //ok
    // export const PUTFeedbackRecordsID = (ID, param) => PutID('/api/FeedbackRecords/', ID, param); 
export const DELETEFeedbackRecordsID = ID => DeleteID('/api/FeedbackRecords/', ID); //ok



// IndoorGrounds
export const GETIndoorGrounds = param => Get('/api/IndoorGrounds', param) //ok
export const GETIndoorGroundsID = ID => GetID('/api/IndoorGrounds/', ID) //ok   
    // export const POSTIndoorGrounds = param => Post('/api/IndoorGrounds', param);
export const PUTIndoorGroundsID = (ID, param) => PutID('/api/IndoorGrounds/', ID, param); //ok
// export const DELETEIndoorGroundsID = ID => DeleteID('/api/IndoorGrounds/', ID);



//Grounds
export const GETGrounds = param => Get('/api/Grounds', param) //ok
export const GETGroundsID = ID => GetID('/api/Grounds/', ID) //ok
export const PUTGroundsID = (ID, param) => PutID('/api/Grounds/', ID, param); //ok



//OutdoorGrounds
export const GETOutdoorGrounds = param => Get('/api/OutdoorGrounds', param)
export const GETOutdoorGroundsID = ID => GetID('/api/OutdoorGrounds/', ID)

//Groundsmen
// export const GETGroundsmen = param => Get('/api/Groundsmen', param);
export const GETGroundsmenID = ID => GetID('/api/Groundsmen/', ID); //ok
export const PUTGroundsmenID = (ID, param) => PutID('/api/Groundsmen/', ID, param); 
// export const DELETEGroundsmenID = ID => DeleteID('/api/Groundsmen/', ID);


//MaintenanceAnnouncements
export const GETMaintenanceAnnouncements = param => Get('/api/MaintenanceAnnouncements', param); //ok
export const POSTMaintenanceAnnouncements = param => Post('/api/MaintenanceAnnouncements', param); //ok


//OccupyTimes
export const GETOccupyTimes = param => Get('/api/OccupyTimes', param); //ok 但是现在表是空的


//Organizations
export const GETOrganizations = param => Get('/api/Organizations', param); //ok
export const PUTOrganizations = param => Put('/api/Organizations', param); //ok
export const POSTOrganizations = param => Post('/api/Organizations', param); //ok
export const GETOrganizationsID = ID => GetID('/api/Organizations/', ID); //ok
export const PUTOrganizationsID = (ID, param) => PutID('/api/Organizations/', ID, param); //ok
export const DELETEOrganizationsID = ID => DeleteID('/api/Organizations/', ID); //ok


//OrgFavorites
export const GETOrgFavorites = param => Get('/api/OrgFavorites', param); //ok
export const POSTOrgFavorites = param => Post('/api/OrgFavorites', param); //ok
export const DELETEOrgFavorites = param => Delete('/api/OrgFavorites', param); //ok

//Students
export const GETStudents = param => Get('/api/Students', param); //ok
export const POSTStudents = param => Post('/api/Students', param); //ok
export const GETStudentsID = ID => GetID('/api/Students/', ID); //ok
export const PUTStudentsID = (ID, param) => PutID('/api/Students/', ID, param); //ok
export const DELETEStudentsID = ID => DeleteID('/api/Students/', ID); //ok


// StuFavorites
export const GETStuFavoritesID = ID => GetID('/api/StuFavorites/', ID); //ok
export const DELETEStuFavorites = param => Delete('/api/StuFavorites/', param); //ok
export const POSTStuFavorites = param => Post('/api/StuFavorites', param); //ok

//SystemAdministrators
export const PUTSystemAdministratorsID = (ID, param) => PutID('/api/SystemAdministrators/', ID, param); //正在编写
export const GETSystemAdministrators = param => Get('/api/SystemAdministrators', param); //目前有4个
export const GETSystemAdministratorsID = ID => GetID('/api/SystemAdministrators/', ID); //ok

//SystemAnnouncements
export const GETSystemAnnouncements = param => Get('/api/SystemAnnouncements', param); //ok
export const POSTSystemAnnouncements = param => Post('/api/SystemAnnouncements', param); //ok
export const PUTSystemAnnouncements = param => Put('/api/SystemAnnouncements', param); //ok
export const DELETESystemAnnouncements = param => Delete('/api/SystemAnnouncements', param); //ok

//Positions
export const GETPositions = param => Get('/api/Positions', param); //wy测试ok

//login
export const Login = param => Get('/api/Login', param);
export const GETIdentity = param => Get('/api/Login/identity', param);
export const LoginTest = param => Get('/api/Login/test/student', param);
export const LoginTestOrg = param => Get('/api/Login/test/organization', param);
export const LoginTestStuID = ID => GetID('/api/Login/test/student/', ID);

//email
export const GETStuEmail = param => Get('/api/Students/api/QQEmail', param);
export const GETOrgEmail = param => Get('/api/Organizations/QQEmail', param)
    //modify password
export const PUTStuPassword = param => Put('/api/Students', param);
export const PUTOrgPassword = param => Put('/api/Organizations', param);