import { useEffect } from "react"
import { Route, useHistory, Switch,Link, useRouteMatch } from 'react-router-dom'
import { Editprofile } from "./Editprofile"
import { Viewprofile } from "./Viewprofile"

export const Profile = ({login}) => {
        const history = useHistory()
        useEffect(() => {
          if (!login) {
            history.push('/');
          }
        }, [login, history])
        const {path,url} = useRouteMatch();
    return (
      <>
        <h1>Profile</h1>
        <ul>
          <li>
            <Link to={`${url}/Viewprofile`}>View profile</Link>
          </li>
          <li>
            <Link to={`${url}/Editprofile`}>Edit profile</Link>
          </li>
        </ul> 
        <Switch>
          <Route path={`${path}/Viewprofile`} component={Viewprofile}/>
          <Route path={`${path}/Editprofile`} component={Editprofile}/>
        </Switch>
      </>
    )
}
