/**   
 * api接口统一管理
 */
import { Get, Post, DeleteID, PutID, GetID,Delete,Put} from './config'

/*Activities*/
export const GETActivities = param => Get('/api/Activities', param); //ok
export const POSTActivities = param => Post('/api/Activities', param); //ok
export const PUTActivitiesID = (ID, param) => PutID('/api/Activities/', ID, param); //ok
export const DELETEActivitiesID = ID => DeleteID('/api/Activities/', ID);
export const GETActivitiesID = ID => GetID('/api/Activities/', ID); //ok
/*CreditRecords*/
export const GETCreditRecords = param => Get('/api/creditrecords', param)//ok
export const POSTCreditRecords = param => Post('/api/creditrecords', param)//ok
export const GETCreditRecordsID = ID => GetID('/api/creditrecords/', ID)//ok

/*DefaultOccupyTime*/
export const GETDefaultOccupyTime = param => Get('/api/DefaultOccupyTimes', param);//ok
export const POSTDefaultOccupyTime = param => Post('/api/DefaultOccupyTimes', param);//ok
export const DELETEDefaultOccupyTime = param => Delete('/api/DefaultOccupyTimes', param);//ok

// ExamineAndApproves
export const GETExamineAndApproves = param => Get('/api/ExamineAndApproves', param);//ok
export const POSTExamineAndApproves = param => Post('/api/ExamineAndApproves', param);//ok
export const GETExamineAndApprovesID = ID => GetID('/api/ExamineAndApproves/', ID)//ok
export const PUTExamineAndApprovesID = (ID, param) => PutID('/api/ExamineAndApproves/', ID, param);//参数如何传递
export const DELETEExamineAndApprovesID = ID => DeleteID('/api/ExamineAndApproves/', ID);//ok

//FeedbackRecords
export const GETFeedbackRecords = param => Get('/api/FeedbackRecords', param);//ok

export const POSTFeedbackRecords = param => Post('/api/FeedbackRecords', param);//NOOK

export const GETFeedbackRecordsID = ID => GetID('/api/FeedbackRecords/', ID)//ok
// export const PUTFeedbackRecordsID = (ID, param) => PutID('/api/FeedbackRecords/', ID, param); 
export const DELETEFeedbackRecordsID = ID => DeleteID('/api/FeedbackRecords/', ID);//ok



// IndoorGrounds
export const GETIndoorGrounds = param => Get('/api/IndoorGrounds', param)//ok
export const GETIndoorGroundsID = ID => GetID('/api/IndoorGrounds/', ID)//ok   
// export const POSTIndoorGrounds = param => Post('/api/IndoorGrounds', param);
// export const PUTIndoorGroundsID = (ID, param) => PutID('/api/IndoorGrounds/', ID, param); 
// export const DELETEIndoorGroundsID = ID => DeleteID('/api/IndoorGrounds/', ID);



//Grounds
export const GETGrounds = param => Get('/api/Grounds', param)//ok
export const GETGroundsID = ID => Get('/api/Grounds/',ID)//ok
// export const POSTGrounds = param => Post('/api/Grounds', param); 
// export const PUTGroundsID = (ID, param) => PutID('/api/Grounds/', ID, param); 
// export const DELETEGroundsID = ID => DeleteID('/api/Grounds/', ID);

//Groundsmen
// export const GETGroundsmen = param => Get('/api/Groundsmen', param);
export const GETGroundsmenID = ID => GetID('/api/Groundsmen/', ID);//ok
// export const PUTGroundsmenID = (ID, param) => PutID('/api/Groundsmen/', ID, param); 
// export const DELETEGroundsmenID = ID => DeleteID('/api/Groundsmen/', ID);


//MaintenanceAnnouncements
export const GETMaintenanceAnnouncements = param => Get('/api/MaintenanceAnnouncements', param);//ok
export const POSTMaintenanceAnnouncements = param => Post('/api/MaintenanceAnnouncements', param); //ok


//OccupyTimes
export const GETOccupyTimes = param => Get('/api/OccupyTimes', param);//ok 但是现在表是空的


//Organizations
export const GETOrganizations = param => Get('/api/Organizations', param);//ok
export const PUTOrganizations = param => Put('/api/Organizations', param);//ok
export const POSTOrganizations = param => Post('/api/Organizations', param); //ok
export const GETOrganizationsID = ID => GetID('/api/Organizations/', ID);
export const PUTOrganizationsID = (ID, param) => PutID('/api/Organizations/', ID, param); 


//OrgFavorites
export const GETOrgFavorites = param => Get('/api/OrgFavorites', param);
export const POSTOrgFavorites = param => Post('/api/OrgFavorites', param); 
export const DELETEOrgFavorites = param => Delete('/api/OrgFavorites', param);

//Students
export const GETStudents = param => Get('/api/Students', param);
export const POSTStudents = param => Post('/api/Students', param); 
export const GETStudentsID = ID => GetID('/api/Students/', ID);
export const PUTStudentsID = (ID, param) => PutID('/api/Students/', ID, param); 


// StuFavorites
   //accountnumber?
export const GETStuFavoritesID = ID => GetID('/api/StuFavorites/', ID);
   //id groundid?
export const DELETEStuFavoritesID = ID => DeleteID('/api/StuFavorites/', ID);
export const POSTStuFavorites = param => Post('/api/StuFavorites', param); 

//SystemAdministrators
export const PUTSystemAdministratorsID = (ID, param) => PutID('/api/SystemAdministrators/', ID, param); 

//SystemAnnouncements
export const GETSystemAnnouncements = param => Get('/api/SystemAnnouncements', param);
export const POSTSystemAnnouncements = param => Post('/api/SystemAnnouncements', param); 
    //{id},{systemAnnouncementDate},{systemAnnouncementTime}?
export const PUTSystemAnnouncementsID = (ID, param) => PutID('/api/SystemAnnouncements/', ID, param); 
export const DELETESystemAnnouncementsID = ID => DeleteID('/api/SystemAnnouncements/', ID);

