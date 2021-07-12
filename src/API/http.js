/**   
 * api接口统一管理
 */
import { Get, Post, DeleteID, PutID, GetID,Delete } from './config'

/*Activities*/
export const GETActivities = param => Get('/api/Activities', param); //ok
export const POSTActivities = param => Post('/api/Activities', param); //ok
export const PUTActivitiesID = (ID, param) => PutID('/api/Activities/', ID, param); //ok
export const DELETEActivitiesID = ID => DeleteID('/api/Activities/', ID);
export const GETActivitiesID = ID => GetID('/api/Activities/', ID); //ok
/*CreditRecords*/
export const GETCreditRecords = param => Get('/api/creditrecords', param)
export const POSTCreditRecords = param => Post('/api/creditrecords', param)
export const GETCreditRecordsID = ID => GetID('/api/creditrecords/', ID)

/*DefaultOccupyTime*/
export const GETDefaultOccupyTime = param => Get('/api/DefaultOccupyTimes', param);
export const POSTDefaultOccupyTime = param => Post('/api/DefaultOccupyTimes', param);
export const DELETEDefaultOccupyTime = param => Delete('/api/DefaultOccupyTimes', param);

// ExamineAndApproves
export const GETFeedbackRecords = param => Get('/api/FeedbackRecords', param);
export const POSTFeedbackRecords = param => Post('/api/FeedbackRecords', param);


// IndoorGrounds
export const GETIndoorGrounds = param => Get('/api/IndoorGrounds', param)
//Grounds
export const GETGrounds = param => Get('/api/Grounds', param)
export const GETGroundsID = ID => Get('/api/Grounds/',ID)

