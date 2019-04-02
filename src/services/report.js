import request from '@/utils/request';
import { stringify } from 'qs';

export async function searchSendRepairNum(params) {
  return request(`/report/sendRepairNum?${stringify(params)}`);
}

export async function searchSendRepairSuccess(params) {
  return request(`/report/sendRepairSuccess?${stringify(params)}`);
}

export async function initSendRepairNum() {
  return request('/report/sendRepairNumInit');
}

export async function initSendRepairSuc(){
  return request('/report/sendRepairSuccessInit');
}

export async function searchMonitorRemedy(){
  return request('/report/monitorRemedy');
}

export async function initMonitorRemedy(){
  return request('/report/monitorRemedyInit');
}

export async function searchClientFeedback(params){
  return request(`/report/clientFeedback?${stringify(params)}`);
}

export async function initClientFeedback(){
  return request('/report/clientFeedbackInit');
}

export async function searchSendRepairProcess(params){
  return request(`/report/sendRepairProcess?${stringify(params)}`);
}

export async function initSendRepairProcess(){
  return request('/report/sendRepairProcessInit');
}

export async function searchSendRepairStrategy(params){
  return request(`/report/sendRepairStrategy?${stringify(params)}`);
}

export async function initSendRepairStrategy(){
  return request('/report/sendRepairStrategyInit');
}

export async function searchOrganizationCover(params){
  return request(`/report/sendOrganizationCover?${stringify(params)}`);
}

export async function initOrganizationCover(){
  return request('/report/sendOrganizationCoverInit');
}

export async function searchRepairCompanyCover(params){
  return request(`/report/repairCompanyCover?${stringify(params)}`);
}

export async function initRepairCompanyCover(){
  return request('/report/repairCompanyCoverInit');
}

