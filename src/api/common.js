/**
 * 请求统一管理
 */
import Request from '../util/request';

/* Common */
export const rankGender = data => Request.get('/ranking/gender', data);
