// dummy API responses

var responses = {
	geocoder: {
		csv: {
			single: '38.898748,-77.037684,1600 Pennsylvania Ave NW,Washington,DC,20502',
			multi: '35.034374,-85.302557,400 E Main St,Chattanooga,TN,37408\n35.037674,-85.311257,400 W Main St,Chattanooga,TN,37408\n',
			none: '2: couldn\'t find this address! sorry'
		},
		xml: {
			single: '<?xml version="1.0"?><rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><geo:Point rdf:nodeID="aid45482855"><dc:description>1600 Pennsylvania Ave NW, Washington DC 20502</dc:description><geo:long>-77.037684</geo:long><geo:lat>38.898748</geo:lat></geo:Point></rdf:RDF>',
			multi: '<?xml version="1.0"?><rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><geo:Point rdf:nodeID="aid59544581"><dc:description>400 W Main St, Chattanooga TN 37408</dc:description><geo:long>-85.311257</geo:long><geo:lat>35.037674</geo:lat></geo:Point><geo:Point rdf:nodeID="aid44130478"><dc:description>400 E Main St, Chattanooga TN 37408</dc:description><geo:long>-85.302557</geo:long><geo:lat>35.034374</geo:lat></geo:Point></rdf:RDF>',
			none: 'couldn\'t find this address! sorry'
		}
	},
	here: {
		single: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><ns2:Search xmlns:ns2="http://www.navteq.com/lbsp/Search-Search/4"><Response><MetaInfo><Timestamp>2014-12-18T14:52:15.614Z</Timestamp></MetaInfo><View xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns2:SearchResultsViewType"><ViewId>0</ViewId><Result><Relevance>1.0</Relevance><MatchLevel>houseNumber</MatchLevel><MatchQuality><State>1.0</State><City>1.0</City><Street>0.95</Street><HouseNumber>1.0</HouseNumber></MatchQuality><MatchType>pointAddress</MatchType><Location><LocationId>NT_cQlZIGPM5M0B+9bocbVVTD_1600</LocationId><LocationType>address</LocationType><DisplayPosition><Latitude>38.8976784</Latitude><Longitude>-77.0365524</Longitude></DisplayPosition><NavigationPosition><Latitude>38.8987503</Latitude><Longitude>-77.0365295</Longitude></NavigationPosition><MapView><TopLeft><Latitude>38.8988025</Latitude><Longitude>-77.0379969</Longitude></TopLeft><BottomRight><Latitude>38.8965542</Latitude><Longitude>-77.035108</Longitude></BottomRight></MapView><Address><Label>1600 Pennsylvania Ave NW, Washington, DC 20500, United States</Label><Country>USA</Country><State>DC</State><County>District of Columbia</County><City>Washington</City><District>Washington Mall</District><Street>Pennsylvania Ave NW</Street><HouseNumber>1600</HouseNumber><PostalCode>20500</PostalCode><AdditionalData key="CountryName">United States</AdditionalData><AdditionalData key="StateName">District of Columbia</AdditionalData></Address></Location></Result></View></Response></ns2:Search>',
		multi: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><ns2:Search xmlns:ns2="http://www.navteq.com/lbsp/Search-Search/4"><Response><MetaInfo><Timestamp>2014-12-18T15:31:45.572Z</Timestamp></MetaInfo><View xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns2:SearchResultsViewType"><ViewId>0</ViewId><Result><Relevance>1.0</Relevance><MatchLevel>houseNumber</MatchLevel><MatchQuality><State>1.0</State><City>1.0</City><Street>0.95</Street><HouseNumber>1.0</HouseNumber></MatchQuality><MatchType>pointAddress</MatchType><Location><LocationId>NT_oK+ZeQ6zaf0tK8wvoP7hfB_400</LocationId><LocationType>address</LocationType><DisplayPosition><Latitude>35.0338783</Latitude><Longitude>-85.3022385</Longitude></DisplayPosition><NavigationPosition><Latitude>35.0342293</Latitude><Longitude>-85.3023529</Longitude></NavigationPosition><MapView><TopLeft><Latitude>35.0350025</Latitude><Longitude>-85.3036114</Longitude></TopLeft><BottomRight><Latitude>35.0327542</Latitude><Longitude>-85.3008656</Longitude></BottomRight></MapView><Address><Label>400 E Main St, Chattanooga, TN 37408, United States</Label><Country>USA</Country><State>TN</State><County>Hamilton</County><City>Chattanooga</City><District>Southside Historic District</District><Street>E Main St</Street><HouseNumber>400</HouseNumber><PostalCode>37408</PostalCode><AdditionalData key="CountryName">United States</AdditionalData><AdditionalData key="StateName">Tennessee</AdditionalData></Address></Location></Result><Result><Relevance>1.0</Relevance><MatchLevel>houseNumber</MatchLevel><MatchQuality><State>1.0</State><City>1.0</City><Street>0.95</Street><HouseNumber>1.0</HouseNumber></MatchQuality><MatchType>interpolated</MatchType><Location><LocationId>NT_u319Bp60+5vm7Ue8JYZVAD_400</LocationId><LocationType>address</LocationType><DisplayPosition><Latitude>35.0375328</Latitude><Longitude>-85.3114624</Longitude></DisplayPosition><NavigationPosition><Latitude>35.03766</Latitude><Longitude>-85.3114101</Longitude></NavigationPosition><MapView><TopLeft><Latitude>35.038657</Latitude><Longitude>-85.3128354</Longitude></TopLeft><BottomRight><Latitude>35.0364087</Latitude><Longitude>-85.3100894</Longitude></BottomRight></MapView><Address><Label>400 W Main St, Chattanooga, TN 37402, United States</Label><Country>USA</Country><State>TN</State><County>Hamilton</County><City>Chattanooga</City><District>Downtown Chattanooga</District><Street>W Main St</Street><HouseNumber>400</HouseNumber><PostalCode>37402</PostalCode><AdditionalData key="CountryName">United States</AdditionalData><AdditionalData key="StateName">Tennessee</AdditionalData></Address></Location></Result></View></Response></ns2:Search>',
		none: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><ns2:Search xmlns:ns2="http://www.navteq.com/lbsp/Search-Search/4"><Response><MetaInfo><Timestamp>2014-12-18T15:31:45.733Z</Timestamp></MetaInfo></Response></ns2:Search>'
	}
};

module.exports = responses;