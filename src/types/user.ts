// user types

export default interface User {
    private name: string;
};

export interface UserState {
    user: User;
    success: boolean;
}