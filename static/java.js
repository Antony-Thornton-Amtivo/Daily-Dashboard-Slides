const webIntegrationId = "pbRPFLBfDLCbNgOrQYw2R4dSkSHWLoUl";
const yourAuthToken = "eyJhbGciOiJFUzM4NCIsImtpZCI6ImE5MTNmNTJjLWVkZmItNDM2OS04Yjg3LTA1OTRiMjA3YmZmYiIsInR5cCI6IkpXVCJ9.eyJzdWJUeXBlIjoidXNlciIsInRlbmFudElkIjoicVRrS3NRcDNmUVJQUUZvdUxnVmNGV21NTmZ6N3Z5S1UiLCJqdGkiOiJhOTEzZjUyYy1lZGZiLTQzNjktOGI4Ny0wNTk0YjIwN2JmZmIiLCJhdWQiOiJxbGlrLmFwaSIsImlzcyI6InFsaWsuYXBpL2FwaS1rZXlzIiwic3ViIjoiNjQxMDQ5YmVmY2UzYjQ5ZTFkMjdkMWJjIn0.Zcx_pHFUhMzLotXY2oSoWj1ZwGh81-zTCAE5WFwmWoMhNHH9qDuVpstBXQcY9lnlcIhpuc05E6F2p3kQ0-nt-XWxfPlI1NWW2MHfASLFIEKXPH3wqduz4lXkIWZ8V5oG"

function login() {
    function isLoggedIn() {
      return fetch("https://bab.eu.qlikcloud.com/api/v1/users/me", {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'qlik-web-integration-id': webIntegrationId,
          'Authorization': `Bearer ${yourAuthToken}`,
        },
      }).then(response => {
        return response.status === 200;
      });
    }
    return isLoggedIn().then(loggedIn => {
      if (!loggedIn) {

          window.top.location.href = "https://bab.eu.qlikcloud.com/login?qlik-web-integration-id=" + webIntegrationId + "&returnto=" + top.location.href;
        throw new Error('not logged in');
      }
    });
  }

document.addEventListener('DOMContentLoaded', () => {
    login();
});
