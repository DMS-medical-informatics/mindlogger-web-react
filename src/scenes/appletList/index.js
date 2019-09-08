import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import AppletListItem from '../../components/AppletListItem';
import { appletSelector } from '../../state/user/user.selectors';
import { setCurrentApplet } from '../../state/app/app.actions';


const Applets = ({ setCurrentApplet, applets }) => {
  if (typeof applets === "undefined") {
    return (
      <div className="Item-list">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }
  const items = applets.map((applet, index) => (
    <Link key={index} to="/activities" className="List-item-container" onClick={() => {
      setCurrentApplet(applet);
    }}>
      <AppletListItem name={applet.applet["schema:description"]} />
    </Link>
  ))
  return (
    <div className="Item-list">
      {items}
    </div>
  );
}

const mapStateToProps = state => ({
  applets: appletSelector(state),
});

const mapDispatchToProps = {
  setCurrentApplet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Applets);