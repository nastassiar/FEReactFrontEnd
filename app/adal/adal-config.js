var adalConfig = {
  tenant: 'common',
  clientId: 'b7685453-a0ed-4fb0-abda-24646d7b2b14',
  extraQueryParameter: 'nux=1',
  disableRenewal: true,
  endpoints: {
    'https://graph.microsoft.com': 'https://graph.microsoft.com'
  }
  // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost. 
};

module.exports = adalConfig;
