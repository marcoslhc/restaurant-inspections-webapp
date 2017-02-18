import request from '../request';

// Endpoint for all counties
const endpoint      = 'counties';

// Object a ~> (a) => a
const mapCountyData = county   => ({ name: county.countyname, id: county.countynumber });

// Array a ~> (a) => a
const mapCounties   = response => response.map(mapCountyData);

export default {
    get() {
        return request.get(`${endpoint}`)
            .then(mapCounties);
    }
}
