import * as userActions from './userActions';
import { REGISTER_USER } from "./actionTypes";

describe('updateActions', () => {
    it('creates addUserAction', () => {
        expect(userActions.addUserAction({userName: 'xxx'})).toEqual({
            type: REGISTER_USER,
            user: {userName: 'xxx'}
        });
    });
});