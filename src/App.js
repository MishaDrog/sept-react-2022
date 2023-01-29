import {UsersForm} from "./components/users_form/UsersForm";
import {Users} from "./components/users/Users";


const App = () => {
    return (
        <div style={{textAlign: "center"}}>
            <UsersForm/>
            <hr/>
            <Users/>

        </div>
    );
};

export {App};