import axios from 'axios';
//const api_client_id = '21c676aced801058380ce52b14a493a13ffb3a691535e184019727c4fc3063b9'; // can be found here: https://admin-sandbox.stuart.com/client/api
//const api_client_secret = '59e7151ed7b8248a2f9e8eae01ea94f46d33f555b24cc92ddbadbbb221fa5cc5'; // can be found here: https://admin-sandbox.stuart.com/client/api
const TOKEN_API = '54a654ad2a5bedfe3476adb8d627ed50891845c594cbecbd42521aa5fe84d6f5';
const STUART_ENDPOINT = 'https://sandbox-api.stuart.com';
const axiosInstance = axios.create({
	baseURL: STUART_ENDPOINT,
	timeout: 5000,
	headers: {
		Authorization: `Bearer ${TOKEN_API}`,
		'Content-Type': 'application/json'
	}
});
class Stuart {
	public createNewJob = (job: object) => {
		return axiosInstance.post('/v2/jobs', job);
	};
	public getJobList = () => {};
	public valideAddress = (address: string, type: string) => {};
	public valideJob = (job: object) => {
		return axiosInstance.post('/v2/jobs/validate', job);
	};
	public cancelJob = (id: string) => {};
}
export default new Stuart();
