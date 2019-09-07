import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppletListItem from '../../components/AppletListItem';
import api from '../../services/api';
import config from '../../config';
import { authTokenSelector, userSelector } from '../../state/user/user.selectors';
import { setApplets } from '../../state/user/user.actions';
import { setCurrentApplet } from '../../state/app/app.actions';


const Applets = ({ setApplets, setCurrentApplet, authToken, user }) => {

  useEffect(() => {
    api.getAppletsForUser({
      apiHost: config.defaultApiHost,
      token: authToken,
      user: user._id,
      role: 'user'
    }).then((resp) => {
      console.log(resp);
      setApplets(resp.data)
    }).catch((resp) => {
      console.log(resp);
    })
  }, []);

  return (
    <div className="Item-list">
      <Link to="/activities" className="List-item-container">
        <AppletListItem onClick={setCurrentApplet} />
      </Link>
    </div>
  );
}

const mapStateToProps = state => ({
  authToken: authTokenSelector(state),
  user: userSelector(state),
});

const mapDispatchToProps = {
  setApplets,
  setCurrentApplet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Applets);