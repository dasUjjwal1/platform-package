import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const authServiceApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${BASE_URL}/platform/v1/tenant/auth`,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     credentials: 'include',
//   }),
//   reducerPath: 'authServiceApi',
//   endpoints: (builder) => ({
//     sendOtp: builder.mutation<ResponseType<string>, string>({
//       query: (email) => ({
//         url: '/send-otp',
//         method: 'POST',
//         body: { email },
//       }),
//     }),
//     verifyOtp: builder.mutation<ResponseType<string>, VerifyOTP>({
//       query: (data) => ({
//         url: '/verify-otp',
//         method: 'POST',
//         body: data,
//       }),
//     }),
//     registerTenant: builder.mutation<
//       ResponseType<AuthResponseType>,
//       RegisterFormValues & { token: string }
//     >({
//       query: (data) => ({
//         url: '/register-tenant',
//         method: 'POST',
//         body: {
//           token: data?.token,
//           tenant_name: data?.tenant_name,
//           tenant_email: data?.email,
//           password: data?.password,
//         },
//       }),
//     }),
//     loginTenant: builder.mutation<
//       ResponseType<AuthResponseType>,
//       LoginFormValues
//     >({
//       query: (data) => ({
//         url: '/login-tenant',
//         method: 'POST',
//         body: {
//           tenant_email: data?.email,
//           password: data?.password,
//         },
//       }),
//     }),
//   }),
// });
// export const authCredentialServiceApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${BASE_URL}/platform/v1/tenant/auth`,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     credentials: 'include',
//   }),
//   reducerPath: 'authCredentialServiceApi',
//   endpoints: (builder) => ({
//     authCurrent: builder.query<ResponseType<AuthResponseType>, undefined>({
//       query: () => ({
//         url: '/get-authentication',
//         method: 'GET',
//       }),
//     }),
//     logout: builder.query<ResponseType<string>, string | null>({
//       query: (fcm) => ({
//         url: fcm ? `/logout/${fcm}` : '/logout/n',
//         method: 'GET',
//       }),
//     }),
//   }),
// });
// export const {
//   useSendOtpMutation,
//   useVerifyOtpMutation,
//   useRegisterTenantMutation,
//   useLoginTenantMutation,
// } = authServiceApi;
// export const { useAuthCurrentQuery, useLazyLogoutQuery } =
//   authCredentialServiceApi;
