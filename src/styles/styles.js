const size = {
  mobile: '480px',
  otherDevices: '481px'
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  otherDevices: `(min-width: ${size.otherDevices})`
};
