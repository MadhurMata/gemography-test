const size = {
  smallDevices: '600px',
  otherDevices: '601px'
};

export const device = {
  smallDevices: `(max-width: ${size.smallDevices})`,
  otherDevices: `(min-width: ${size.otherDevices})`
};
