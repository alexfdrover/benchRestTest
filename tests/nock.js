const nock = require('nock');

const t1 = {
  "totalCount": 38,
  "page": 1,
  "transactions": [{
      "Date": "2013-12-22",
      "Ledger": "Phone & Internet Expense",
      "Amount": "-110.71",
      "Company": "SHAW CABLESYSTEMS CALGARY AB"
  }, {
      "Date": "2013-12-21",
      "Ledger": "Travel Expense, Nonlocal",
      "Amount": "-8.1",
      "Company": "BLACK TOP CABS VANCOUVER BC"
  }, {
      "Date": "2013-12-21",
      "Ledger": "Business Meals & Entertainment Expense",
      "Amount": "-9.88",
      "Company": "GUILT & CO. VANCOUVER BC"
  }, {
      "Date": "2013-12-20",
      "Ledger": "Travel Expense, Nonlocal",
      "Amount": "-7.6",
      "Company": "VANCOUVER TAXI VANCOUVER BC"
  }, {
      "Date": "2013-12-20",
      "Ledger": "Business Meals & Entertainment Expense",
      "Amount": "-120",
      "Company": "COMMODORE LANES & BILL VANCOUVER BC"
  }, {
      "Date": "2013-12-20",
      "Ledger": "Business Meals & Entertainment Expense",
      "Amount": "-177.5",
      "Company": "COMMODORE LANES & BILL VANCOUVER BC"
  }, {
      "Date": "2013-12-20",
      "Ledger": "Equipment Expense",
      "Amount": "-1874.75",
      "Company": "NINJA STAR WORLD VANCOUVER BC"
  }, {
      "Date": "2013-12-19",
      "Ledger": "",
      "Amount": "20000",
      "Company": "PAYMENT - THANK YOU / PAIEMENT - MERCI"
  }, {
      "Date": "2013-12-19",
      "Ledger": "Web Hosting & Services Expense",
      "Amount": "-10.99",
      "Company": "DROPBOX xxxxxx8396 CA 9.99 USD @ xx1001"
  }, {
      "Date": "2013-12-19",
      "Ledger": "Business Meals & Entertainment Expense",
      "Amount": "-35.7",
      "Company": "NESTERS MARKET #x0064 VANCOUVER BC"
  }]
};

const t2 = {
  "totalCount": 38,
  "page": 2,
  "transactions": [{
      "Date": "2013-12-19",
      "Ledger": "Travel Expense, Nonlocal",
      "Amount": "-200",
      "Company": "YELLOW CAB COMPANY LTD VANCOUVER"
  }, {
      "Date": "2013-12-18",
      "Ledger": "Business Meals & Entertainment Expense",
      "Amount": "-8.94",
      "Company": "NESTERS MARKET #x0064 VANCOUVER BC"
  }, {
      "Date": "2013-12-18",
      "Ledger": "Travel Expense, Nonlocal",
      "Amount": "-9.55",
      "Company": "VANCOUVER TAXI VANCOUVER BC"
  }, {
      "Date": "2013-12-18",
      "Ledger": "Travel Expense, Nonlocal",
      "Amount": "-10.9",
      "Company": "YELLOW CAB CO LTD VANCOUVER BC"
  }, {
      "Date": "2013-12-18",
      "Ledger": "Travel Expense, Nonlocal",
      "Amount": "-10.9",
      "Company": "YELLOW CAB CO LTD VANCOUVER BC"
  }, {
      "Date": "2013-12-18",
      "Ledger": "Insurance Expense",
      "Amount": "-22.94",
      "Company": "LONDON DRUGS #78 VANCOUVER BC"
  }, {
      "Date": "2013-12-18",
      "Ledger": "Web Hosting & Services Expense",
      "Amount": "-50.95",
      "Company": "LINKEDIN LINKEDIN.COM"
  }, {
      "Date": "2013-12-18",
      "Ledger": "Office Expense",
      "Amount": "-642.79",
      "Company": "COSTCO WHOLESALE #55 CO VANCOUVER"
  }, {
      "Date": "2013-12-18",
      "Ledger": "Business Meals & Entertainment Expense",
      "Amount": "-1084.32",
      "Company": "BC LIQUOR #129 VANCOUVER BC"
  }, {
      "Date": "2013-12-17",
      "Ledger": "",
      "Amount": "10000",
      "Company": "PAYMENT - THANK YOU / PAIEMENT - MERCI"
  }]
};

const t3 = {
  "totalCount": 38,
  "page": 3,
  "transactions": [{
      "Date": "2013-12-17",
      "Ledger": "",
      "Amount": "907.85",
      "Company": "PAYMENT RECEIVED - THANK YOU"
  }, {
      "Date": "2013-12-17",
      "Ledger": "Auto Expense",
      "Amount": "6.23",
      "Company": "SMART CITY FOODS xxxxxx3663 BC"
  }, {
      "Date": "2013-12-17",
      "Ledger": "Insurance Expense",
      "Amount": "-4.87",
      "Company": "LONDON DRUGS 78 POSTAL VANCOUVER BC"
  }, {
      "Date": "2013-12-17",
      "Ledger": "Office Expense",
      "Amount": "-16.35",
      "Company": "DYNAMEX EXPRESS xxxxxxxx6414 ON"
  }, {
      "Date": "2013-12-17",
      "Ledger": "Business Meals & Entertainment Expense",
      "Amount": "-206.58",
      "Company": "JUSTIN STITCHES INC VANCOUVER BC"
  }, {
      "Date": "2013-12-16",
      "Ledger": "Business Meals & Entertainment Expense",
      "Amount": "-112.33",
      "Company": "BOWS AND ARROWS COFFEE ROVICTORIA BC"
  }, {
      "Date": "2013-12-16",
      "Ledger": "Education",
      "Amount": "-4463.2",
      "Company": "CLOWN COLLEGE I VANCOUVER BC"
  }, {
      "Date": "2013-12-15",
      "Ledger": "Business Meals & Entertainment Expense",
      "Amount": "-5.39",
      "Company": "URBAN FARE #7618 VANCOUVER BC"
  }, {
      "Date": "2013-12-13",
      "Ledger": "",
      "Amount": "5000",
      "Company": "PAYMENT - THANK YOU / PAIEMENT - MERCI"
  }, {
      "Date": "2013-12-13",
      "Ledger": "Auto Expense",
      "Amount": "-72.75",
      "Company": "SMART CITY FOODS xxxxxx3663 BC"
  }]
};

const t4 = {
  "totalCount": 38,
  "page": 4,
  "transactions": [{
      "Date": "2013-12-13",
      "Ledger": "Insurance Expense",
      "Amount": "-117.81",
      "Company": "LONDON DRUGS 78 POSTAL VANCOUVER BC"
  }, {
      "Date": "2013-12-13",
      "Ledger": "Equipment Expense",
      "Amount": "-520.85",
      "Company": "ECHOSIGN xxxxxxxx6744 CA xx8.80 USD @ xx0878"
  }, {
      "Date": "2013-12-13",
      "Ledger": "Equipment Expense",
      "Amount": "-5518.17",
      "Company": "APPLE STORE #R280 VANCOUVER BC"
  }, {
      "Date": "2013-12-20",
      "Ledger": "Equipment Expense",
      "Amount": "-1874.75",
      "Company": "NINJA STAR WORLD VANCOUVER BC"
  }, {
      "Date": "2013-12-12",
      "Ledger": "Postage & Shipping Expense",
      "Amount": "-30.69",
      "Company": "DHL YVR GW RICHMOND BC"
  }, {
      "Date": "2013-12-12",
      "Ledger": "Office Expense",
      "Amount": "-42.53",
      "Company": "FEDEX xxxxx5291 MISSISSAUGA ON"
  }, {
      "Date": "2013-12-12",
      "Ledger": "Web Hosting & Services Expense",
      "Amount": "-63.01",
      "Company": "GROWINGCITY.COM xxxxxx4926 BC"
  }, {
      "Date": "2013-12-12",
      "Ledger": "Business Meals & Entertainment Expense",
      "Amount": "-91.12",
      "Company": "NESTERS MARKET #x0064 VANCOUVER BC"
  }]
};

const scope = nock('https://resttest.bench.co')
  .get('/transactions/1.json')
  .reply(200, t1);