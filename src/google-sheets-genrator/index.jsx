/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

const Invoice = (props) => {
  console.log(props);
  const {report_invoice} = props;
  const {stream_output} = report_invoice.report_dict;
  console.log(stream_output);
  const headers = ['Parameter', ...Object.keys(stream_output)];
  const row = ['Flow, gpm', ...Object.values(stream_output).map((e=>e.prop_dict.flow))];
  const row1 = ['Temperature, °C', ...Object.values(stream_output).map((e=>e.prop_dict.temp))];
  const row2 = ['Pressure, atm', ...Object.values(stream_output).map((e=>e.prop_dict.press))];
  const row3 = ['TDS, mg/l', ...Object.values(stream_output).map((e=>e.prop_dict.tds))];
  const row4 = ['pH', ...Object.values(stream_output).map((e=>e.prop_dict.ph))];
  const row5 = ['Alkalinity, ppm CaCO3', ...Object.values(stream_output).map((e=>e.prop_dict.malk))];
  const row6 = ['Hardness, ppm as CaCO3', ...Object.values(stream_output).map((e=>e.prop_dict.hardness))];
  const row7 = ['Density, kg/m3', ...Object.values(stream_output).map((e=>e.prop_dict.density))];
  const row8 = ['Ionic Strength', ...Object.values(stream_output).map((e=>e.prop_dict.ionic_str))];
  const row9 = ['Osmotic Pressure, atm', ...Object.values(stream_output).map((e=>e.sat_indices.osmotic_pressure))];
  const row10 = ['Conductivity at 25°C, μS/cm', ...Object.values(stream_output).map((e=>e.sat_indices.conductivity))];
  console.log(Object.values(stream_output).map((e=>e.prop_dict.flow)));
  // stream_output.forEach(element => {
  //   console.log(element);
  // });
  // console.log(headers, ['2.000', '1,000,000', '$2.99']);
  // const
  //    TODO(developer): Set to client ID and API key from the Developer Console
  const CLIENT_ID =
    '535034899858-fu604715mlgl2o7lrqm3h6ah26lausjg.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyBCVknhhiLqBRqMiITD4mLqP07-2fNVAEM';
  const [spreedSheetID, setSpreadSheetID] = useState('');
  // Discovery doc URL for APIs used by the quickstart
  const DISCOVERY_DOC =
    'https://sheets.googleapis.com/$discovery/rest?version=v4';
  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';
  let tokenClient;
  let gapiInited = false;
  let gisInited = false;

  function maybeEnableButtons() {
    if (gapiInited && gisInited) {
      document.getElementById('authorize_button').style.visibility = 'visible';
    }
  }
  async function initializeGapiClient() {
    await window.gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    maybeEnableButtons();
  }
  const gisLoaded = ()=> {
    tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });
    gisInited = true;
    maybeEnableButtons();
    console.log(tokenClient);
  };
  const gapiLoaded=()=> {
    window.gapi.load('client', initializeGapiClient);
  };
  /**
   * Callback after api.js is loaded.
   */

  /**
   * Callback after the API client is loaded. Loads the
   * discovery doc to initialize the API.
   */

  /**
   * Enables user interaction after all libraries are loaded.
   */
  async function batchUpdate(spreadsheetId, title, find, replacement, callback) {
    const requests = [];
    // Change the spreadsheet's title.
    requests.push({
      updateSpreadsheetProperties: {
        properties: {
          'title': title,
        },
        fields: 'title',
      },
    });
    // Find and replace text.
    // requests.push({
    //   findReplace: {
    //     'find': find,
    //     'replacement': replacement,
    //     allSheets: true,
    //   },
    // });
    requests.push({
      updateDimensionProperties: {
        range: {
          sheetId: 0,
          dimension: 'COLUMNS',
          startIndex: 0,
          endIndex: 1,
        },
        properties: {
          pixelSize: 200,
        },
        fields: 'pixelSize',
      },
    });
    requests.push({
      'repeatCell': {
        'range': {
          'sheetId': 0,
          'startRowIndex': 0,
          'endRowIndex': 1
        },
        'cell': {
          'userEnteredFormat': {
            'backgroundColor': {
              'red': 0.0,
              'green': 0.3843137254901961,
              'blue': 0.6627450980392157
            },
            'horizontalAlignment' : 'CENTER',
            'textFormat': {
              'foregroundColor': {
                'red': 1.0,
                'green': 1.0,
                'blue': 1.0
              },
              'fontSize': 12,
              'bold': true
            }
          }
        },
        'fields': 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)'
      }
    },
    {
      'updateSheetProperties': {
        'properties': {
          'sheetId': 0,
          'gridProperties': {
            'frozenRowCount': 1
          }
        },
        'fields': 'gridProperties.frozenRowCount'
      }
    });
    try {
      // Add additional requests (operations) ...
      const batchUpdateRequest = {'requests': requests};
      await window.gapi.client.sheets.spreadsheets.batchUpdate({
        'spreadsheetId': spreadsheetId,
        resource: batchUpdateRequest,
      }).then((response) => {
        const findReplaceResponse = response.result.replies[1].findReplace;
        console.log(`${findReplaceResponse.occurrencesChanged} replacements made.`);
        if (callback) callback(response);
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;

    }
  }
  // async function listMajors() {
  //   let response;
  //   try {
  //     // Fetch first 10 files
  //     response = await window.gapi.client.sheets.spreadsheets.values.get({
  //       spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
  //       range: 'Class Data!A2:E',
  //     });
  //   } catch (err) {
  //     document.getElementById('content').innerText = err.message;
  //     return;
  //   }
  //   const range = response.result;
  //   if (!range || !range.values || range.values.length === 0) {
  //     document.getElementById('content').innerText = 'No values found.';
  //     return;
  //   }
  //   // Flatten to string to display
  //   const output = range.values.reduce(
  //     (str, row) => `${str}${row[0]}, ${row[4]}\n`,
  //     'Name, Major:\n'
  //   );
  //   console.log(output);
  //   document.getElementById('content').innerText = output;
  // };
  function batchUpdateValues(spreedSheetID, range1, valueInputOption1, _values, callback) {
    const values1 = [
      // ['2.000', '1,000,000', '$2.99'],
      // ['2.000', '1,000,000', '$2.99'],
      // ['2.000', '1,000,000', '$2.99'],
      // ['2.000', '1,000,000', '$2.99'],
      // ['2.000', '1,000,000', '$2.99'],
      headers, row, row1, row2, row3, row4, row5, row6, row7, row1, row9, row10,
      // Additional rows ...
    ];
    // values = _values;
    const data1 = [];
    data1.push({
      range: range1,
      values: values1,
    });
    // Additional ranges to update.
    const body = {
      data: data1,
      valueInputOption: valueInputOption1
    };
    try {
      window.gapi.client.sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: spreedSheetID,
        resource: body,
      }).then((response) => {
        const {result} = response;
        console.log(`${result.totalUpdatedCells} cells updated.`);
        if (callback) callback(response);
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;

    }
  }
  function create(title, callback) {
    // const steetIDs = '1HAek_kZbm2BnrB8cDRJZzGsakpvb3Cl5Nnn_LnwpqmY';
    try {
      window.gapi.client.sheets.spreadsheets.create({
        properties: {
          title,
        },
      }).then((response) => {
        if (callback) callback(response);
        // console.log(`Spreadsheet ID: ${  response.result.spreadsheetId}`);
        setSpreadSheetID(response.result.spreadsheetId);
        batchUpdateValues(response.result.spreadsheetId, 'Sheet1!A1', 'USER_ENTERED');
        batchUpdate(response.result.spreadsheetId, 'MainSheet');
        window.open(`https://docs.google.com/spreadsheets/d/${response.result.spreadsheetId}/edit#gid=0`);
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;

    }
  }
  /**
   *  Sign in the user upon button click.
   */
  function handleAuthClick() {
    console.log(tokenClient);
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      document.getElementById('signout_button').style.visibility = 'visible';
      document.getElementById('authorize_button').innerText = 'Refresh';
      await create('sheet1');
    };

    if (window.gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: '' });
    }
  }

  /**
   *  Sign out the user upon button click.
   */
  const handleSignoutClick = ()=> {
    const token = window.gapi.client.getToken();
    console.log(token);
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken('');
      document.getElementById('content').innerText = '';
      document.getElementById('authorize_button').innerText = 'Authorize';
      document.getElementById('signout_button').style.visibility = 'hidden';
    }
  };
  useEffect(() => {
    // create();
    gapiLoaded();
    gisLoaded();

    document.getElementById('authorize_button').style.visibility = 'hidden';
    document.getElementById('signout_button').style.visibility = 'hidden';
  }, []);
  /**
   * Print the names and majors of students in a sample spreadsheet:
   * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
   */

  return (
    <div>
      <button id="authorize_button" onClick={handleAuthClick} type="button">
        Authorize
      </button>
      <button id="signout_button" onClick={handleSignoutClick} type="button">
        Sign Out
      </button>
      <div id='content'>hello</div>
    </div>
  );
};
export default Invoice;
