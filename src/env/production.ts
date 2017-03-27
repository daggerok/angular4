// declare var IS_PRODUCTION: any;
//
// export const isProduction = () => IS_PRODUCTION;

declare var process: any;
export const isProduction = () => 'production';
export const isDevelopment = () => 'development';
