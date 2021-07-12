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