import { IConfig } from '../../shared';

export interface IConfigState {
	config: IConfig;
}

export const initialConfigState: IConfigState = {
	config: null
};
