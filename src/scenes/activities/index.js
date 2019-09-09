import React from 'react';
import { connect } from 'react-redux';
import ActivityListItem from '../../components/ActivityListItem';
import { currentAppletSelector } from '../../state/app/app.selectors';

const Activities = ({ applet }) => {
  const activities = Object.values(applet.activities).map((item, index) => (
    <ActivityListItem key={index} title={item["schema:description"]} />
  ));

  return (
    <div className="Item-list">
        <div className="List-item-container">
          {activities}
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  applet: currentAppletSelector(state),
});

export default connect(mapStateToProps, null)(Activities);