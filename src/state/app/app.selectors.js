import * as R from 'ramda';

export const apiHostSelector = R.path(['app', 'apiHost']);

export const currentAppletSelector = R.path(['app', 'currentApplet'])
