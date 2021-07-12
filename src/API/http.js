/**   
 * api接口统一管理
 */
import { Get, Post, DeleteID, PutID, GetID } from './config'

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

// IndoorGrounds
export const GETIndoorGrounds = param => Get('/api/IndoorGrounds', param)
export const GETIndoorGroundsID = ID => GetID('/api/IndoorGrounds/', ID)
//Grounds
export const GETGrounds = param => Get('/api/Grounds', param)
export const GETGroundsID = ID => Get('/api/Grounds/',ID)
