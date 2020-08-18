let map;

function initMap() {

    //map options
    const options = {
        zoom: 11,
        center: { lat: 26.1665, lng: -80.2084 },
    }

    //new map
    const map = new google.maps.Map(document.getElementById("map"), options);

    //loop through markers
    for(let i=0; i<markers.length; i++) {
      //add marker
      addMarker(markers[i]);
    }

    //add marker function
    function addMarker(props) {
      let marker = new google.maps.Marker({
        position: props.coords,
        map: map,
    });

    //check for custom icon
    if(props.icon){
      //set icon image
      marker.setIcon(props.icon);
    }

    //check content
    if(props.content) {
      let infowindow = new google.maps.InfoWindow({
        content: props.content
      });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

        }
      }
    }

//array of markers
let markers = [
  {
    coords:{lat:26.274031, lng:-80.097061},
    icon: '/images/car.png',
    content: `
    <h2>Adelphia Auto and Tire Services, LLC</h2>
    <h3>Auto repair shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Adelphia+Auto+and+Tire+Services,+LLC/@26.2739285,-80.0993894,17z/data=!3m1!4b1!4m7!3m6!1s0x88d8e2a819309cd1:0x1d730a4ec5485a81!8m2!3d26.2739285!4d-80.0972007!9m1!1b1">4.8 ***** (64)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Adelphia+Auto+and+Tire+Services,+LLC/@26.2739285,-80.0993894,17z/data=!3m1!4b1!4m5!3m4!1s0x88d8e2a819309cd1:0x1d730a4ec5485a81!8m2!3d26.2739285!4d-80.0972007">3500 N Federal Hwy, Lighthouse Point, FL 33064</a></h4>
    <h4><a class="info_link" target="_blank" href="http://adelphiaautoservice.com">http://adelphiaautoservice.com</a></h4>
    <h4>+19547867580</h4>
    <br>
    <p>
        Monday
        8AM–6PM
        <br>  
        Tuesday
        8AM–6PM
        <br>  
        Wednesday
        8AM–6PM
        <br>  
        Thursday
        8AM–6PM
        <br>  
        Friday
        8AM–6PM
        <br>  
        Saturday
        Closed
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.223740, lng:-80.124100},
    icon: '/images/car.png',
    content: `
    <h2>Hellenic Foreign Car Repair</h2>
    <h3>Auto repair shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Hellenic+Foreign+Car+Repair/@26.2237316,-80.1328303,15z/data=!4m7!3m6!1s0x88d902f44e0d6a1b:0xc0175eb653506cb8!8m2!3d26.2237319!4d-80.124097!9m1!1b1">4.4 ***** (13)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Hellenic+Foreign+Car+Repair/@26.2237316,-80.1328303,15z/data=!3m1!4b1!4m5!3m4!1s0x88d902f44e0d6a1b:0xc0175eb653506cb8!8m2!3d26.2237319!4d-80.124097">41 SW 5th Ct, Pompano Beach, FL 33060</a></h4>
    <h4><a class="info_link" target="_blank" href="http://hellenicauto.com/">http://hellenicauto.com/</a></h4>
    <h4>+19549413737</h4>
    <br>
    <p>
        Monday
        8AM–6PM
        <br>  
        Tuesday
        8AM–6PM
        <br>  
        Wednesday
        8AM–6PM
        <br>  
        Thursday
        8AM–6PM
        <br>  
        Friday
        8AM–6PM
        <br>  
        Saturday
        9AM-3PM
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.183427, lng:-80.118443},
    icon: '/images/car.png',
    content: `
    <h2>Mc Kenzie Auto Center</h2>
    <h3>Auto repair shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Mc+Kenzie+Auto+Center/@26.1833723,-80.1184734,17z/data=!4m7!3m6!1s0x88d90218487eb6db:0x7cac7e508e8693fc!8m2!3d26.1833723!4d-80.1184734!9m1!1b1">4.9 ***** (44)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Mc+Kenzie+Auto+Center/@26.1833723,-80.1184734,17z/data=!3m1!4b1!4m5!3m4!1s0x88d90218487eb6db:0x7cac7e508e8693fc!8m2!3d26.1833723!4d-80.1184734">4410 N Federal Hwy, Fort Lauderdale, FL 33308</a></h4>
    <h4><a class="info_link" target="_blank" href="http://mmckenzieauto.com">http://mckenzieauto.com</a></h4>
    <h4>+19547791418</h4>
    <br>
    <p>
        Monday
        8AM–6PM
        <br>  
        Tuesday
        8AM–6PM
        <br>  
        Wednesday
        8AM–6PM
        <br>  
        Thursday
        8AM–6PM
        <br>  
        Friday
        8AM–6PM
        <br>  
        Saturday
        Closed
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.182250, lng:-80.134390},
    icon: '/images/car.png',
    content: `
    <h2>Rothe's Auto Repair</h2>
    <h3>Auto repair shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Rothe's+Auto+Repair/@26.1822373,-80.1344007,17z/data=!3m1!4b1!4m7!3m6!1s0x88d9022f1d655a8b:0x6739134d2355400d!8m2!3d26.1822373!4d-80.1344007!9m1!1b1">4.8 ***** (126)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Rothe's+Auto+Repair/@26.1822373,-80.1409667,15z/data=!4m5!3m4!1s0x88d9022f1d655a8b:0x6739134d2355400d!8m2!3d26.1822373!4d-80.1344007">4444 N Dixie Hwy, Oakland Park, FL 33334</a></h4>
    <h4><a class="info_link" target="_blank" href="http://www.rothesauto.com/">http://www.rothesauto.com/</a></h4>
    <h4>+19547721505</h4>
    <br>
    <p>
        Monday
        7AM–4PM
        <br>  
        Tuesday
        7AM–4PM
        <br>  
        Wednesday
        7AM–4PM
        <br>  
        Thursday
        7AM–4PM
        <br>  
        Friday
        7AM–4PM
        <br>  
        Saturday
        Closed
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.263820, lng:-80.117320},
    icon: '/images/car.png',
    content: `
    <h2>John Herbeck's Auto Repair</h2>
    <h3>Auto repair shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/John+Herbeck's+Auto+Repair/@26.2637506,-80.1195235,17z/data=!3m1!4b1!4m7!3m6!1s0x88d902b4f877e60b:0xf57c1c2040afae6!8m2!3d26.2637506!4d-80.1173348!9m1!1b1">4.4 ***** (93)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/@26.2637506,-80.1195235,17z/data=!3m1!4b1">2621 N Dixie Hwy, Pompano Beach, FL 33064</a></h4>
    <h4><a class="info_link" target="_blank" href="http://www.johnherbecksautorepair.com/">http://www.johnherbecksautorepair.com</a></h4>
    <h4>+19549416761</h4>
    <br>
    <p>
        Monday
        7AM–4PM
        <br>  
        Tuesday
        7AM–4PM
        <br>  
        Wednesday
        7AM–4PM
        <br>  
        Thursday
        7AM–4PM
        <br>  
        Friday
        7AM–4PM
        <br>  
        Saturday
        9AM-1PM
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.166930, lng:-80.142630},
    icon: '/images/car.png',
    content: `
    <h2>Euro Auto Performance</h2>
    <h3>Auto repair shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Euro+Auto+Performance/@26.1669405,-80.1426311,17z/data=!4m7!3m6!1s0x88d90182776f9925:0xd2caacd7a1e2f6f4!8m2!3d26.1669405!4d-80.1426311!9m1!1b1">4.7 ***** (34)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Euro+Auto+Performance/@26.1669405,-80.1426311,17z/data=!3m1!4b1!4m5!3m4!1s0x88d90182776f9925:0xd2caacd7a1e2f6f4!8m2!3d26.1669405!4d-80.1426311">299 E Oakland Park Blvd, Oakland Park, FL 33334</a></h4>
    <h4><a class="info_link" target="_blank" href="http://www.euroautoperformance.com/">http://www.euroautoperformance.com/</a></h4>
    <h4>+19545612088</h4>
    <br>
    <p>
        Monday
        8AM–5:30PM
        <br>  
        Tuesday
        8AM–5:30PM
        <br>  
        Wednesday
        8AM–5:30PM
        <br>  
        Thursday
        8AM–5:30PM
        <br>  
        Friday
        8AM–5:30PM
        <br>  
        Saturday
        Closed
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.093660, lng:-80.239130},
    icon: '/images/car.png',
    content: `
    <h2>Ultimate Euro Repair</h2>
    <h3>Auto repair shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Ultimate+Euro+Repair/@26.0943292,-80.2382203,17z/data=!3m1!4b1!4m7!3m6!1s0x88d90784045c2ee3:0xecfdd3170fbb9471!8m2!3d26.0943292!4d-80.2382203!9m1!1b1">4.7 ***** (60)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Ultimate+Euro+Repair/@26.0943292,-80.2382203,17z/data=!3m1!4b1!4m5!3m4!1s0x88d90784045c2ee3:0xecfdd3170fbb9471!8m2!3d26.0943292!4d-80.2382203">2011 SW 70th Ave # A1, Davie, FL 33317</a></h4>
    <h4><a class="info_link" target="_blank" href="http://www.ultimateeurorepair.com/">http://www.ultimateeurorepair.com/</a></h4>
    <h4>+19544750225</h4>
    <br>
    <p>
        Monday
        7:30AM–5:30PM
        <br>  
        Tuesday
        7:30AM–5:30PM
        <br>  
        Wednesday
        7:30AM–5:30PM
        <br>  
        Thursday
        7:30AM–5:30PM
        <br>  
        Friday
        7:30AM–5:30PM
        <br>  
        Saturday
        Closed
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.122970, lng:-80.153460},
    icon: '/images/car.png',
    content: `
    <h2>Mr D's Auto Repair Inc</h2>
    <h3>Auto repair shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Mr+D's+Auto+Repair+Inc/@26.1225725,-80.153384,17z/data=!4m7!3m6!1s0x88d900fb4f1c6967:0x7b5b62947ccba342!8m2!3d26.1225725!4d-80.153384!9m1!1b1">4.4 ***** (31)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Mr+D's+Auto+Repair+Inc/@26.1225725,-80.153384,17z/data=!3m1!4b1!4m5!3m4!1s0x88d900fb4f1c6967:0x7b5b62947ccba342!8m2!3d26.1225725!4d-80.153384">20 NW 9th Ave, Fort Lauderdale, FL 33311</a></h4>
    <h4><a class="info_link" target="_blank" href="https://www.mrdsauto.com/">https://www.mrdsauto.com/</a></h4>
    <h4>+19547679073</h4>
    <br>
    <p>
        Monday
        8AM–5PM
        <br>  
        Tuesday
        8AM–5PM
        <br>  
        Wednesday
        8AM–5PM
        <br>  
        Thursday
        8AM–5PM
        <br>  
        Friday
        8AM–5PM
        <br>  
        Saturday
        8AM-1PM
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.128406, lng:-80.269309},
    icon: '/images/tire.png',
    content: `
    <h2>Firestone Complete Auto Care</h2>
    <h3>Tire shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Firestone+Complete+Auto+Care/@26.1284061,-80.2693097,17z/data=!3m1!4b1!4m7!3m6!1s0x88d907d11ba345d1:0x5068fd88de268163!8m2!3d26.1284061!4d-80.2693097!9m1!1b1">3.8 ***** (200)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Firestone+Complete+Auto+Care/@26.1284061,-80.3021399,13z/data=!4m5!3m4!1s0x88d907d11ba345d1:0x5068fd88de268163!8m2!3d26.1284061!4d-80.2693097">9000 Cleary Blvd, Plantation, FL 33324</a></h4>
    <h4><a class="info_link" target="_blank" href="https://local.firestonecompleteautocare.com/florida/plantation/9000-cleary-blvd/?utm_source=google&utm_medium=organic&utm_campaign=localmaps&lw_cmp=oloc_google_localmaps_maps">https://www.firestonecompleteautocare.com/</a></h4>
    <h4>+19543207473</h4>
    <br>
    <p>
        Monday
        7AM–7PM
        <br>  
        Tuesday
        7AM–7PM
        <br>  
        Wednesday
        7AM–7PM
        <br>  
        Thursday
        7AM–7PM
        <br>  
        Friday
        7AM–7PM
        <br>  
        Saturday
        7AM-6PM
        <br>  
        Sunday
        8AM-5PM
    </p>
    `
  },
  {
    coords:{lat:26.249057, lng:-80.194685},
    icon: '/images/tire.png',
    content: `
    <h2>Dan's Auto Repair & Tire Service of Margate</h2>
    <h3>Tire shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Dan's+Auto+Repair+%26+Tire+Service+of+Margate/@26.2490573,-80.1946856,17z/data=!4m7!3m6!1s0x88d904989d485aa5:0x5f57d3ae229db01f!8m2!3d26.2490573!4d-80.1946856!9m1!1b1">5.0 ***** (24)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Dan's+Auto+Repair+%26+Tire+Service+of+Margate/@26.2490573,-80.1946856,17z/data=!3m1!4b1!4m5!3m4!1s0x88d904989d485aa5:0x5f57d3ae229db01f!8m2!3d26.2490573!4d-80.1946856">5270 NW 15th St, Margate, FL 33063</a></h4>
    <h4><a class="info_link" target="_blank" href="https://www.danstireservice.com/">https://www.danstireservice.com/</a></h4>
    <h4>+19549757168</h4>
    <br>
    <p>
        Monday
        7:30AM–5:30PM
        <br>  
        Tuesday
        7:30AM–5:30PM
        <br>  
        Wednesday
        7:30AM–5:30PM
        <br>  
        Thursday
        7:30AM–5:30PM
        <br>  
        Friday
        7:30AM–5:30PM
        <br>  
        Saturday
        Closed
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.160980, lng:-80.186528},
    icon: '/images/paint.png',
    content: `
    <h2>Auto Painting USA Body Repair Ft Lauderdale</h2>
    <h3>Auto body shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Auto+Painting+USA+Body+Repair+Ft+Lauderdale/@26.1609802,-80.1865283,17z/data=!4m7!3m6!1s0x88d9014caf92529d:0xff4e300e2205676!8m2!3d26.1609802!4d-80.1865283!9m1!1b1">4.0 ***** (107)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Auto+Painting+USA+Body+Repair+Ft+Lauderdale/@26.1609802,-80.1865283,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9014caf92529d:0xff4e300e2205676!8m2!3d26.1609802!4d-80.1865283">2784 NW 31st Ave, Lauderdale Lakes, FL 33311</a></h4>
    <h4><a class="info_link" target="_blank" href="http://www.autopaintingusa.com/">http://www.autopaintingusa.com/</a></h4>
    <h4>+19547358600</h4>
    <br>
    <p>
        Monday
        7:30AM–5:30PM
        <br>  
        Tuesday
        7:30AM–5:30PM
        <br>  
        Wednesday
        7:30AM–5:30PM
        <br>  
        Thursday
        7:30AM–5:30PM
        <br>  
        Friday
        7:30AM–5PM
        <br>  
        Saturday
        8AM-12PM
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.286888, lng:-80.283830},
    icon: '/images/paint.png',
    content: `
    <h2>Coral Springs Auto Collision Inc.</h2>
    <h3>Auto body shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Coral+Springs+Auto+Collision+Inc./@26.2868888,-80.2838305,17z/data=!3m1!4b1!4m7!3m6!1s0x88d91005b5434a71:0x2f5b89dbea3e87c3!8m2!3d26.2868888!4d-80.2838305!9m1!1b1">4.7 ***** (113)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Coral+Springs+Auto+Collision+Inc./@26.2868888,-80.2838305,17z/data=!3m1!4b1!4m5!3m4!1s0x88d91005b5434a71:0x2f5b89dbea3e87c3!8m2!3d26.2868888!4d-80.2838305">11750 Wiles Rd, Coral Springs, FL 33076</a></h4>
    <h4><a class="info_link" target="_blank" href="http://coralspringsautocollisions.com/">http://coralspringsautocollisions.com/</a></h4>
    <h4>+19543418966</h4>
    <br>
    <p>
        Monday
        8AM–5:30PM
        <br>  
        Tuesday
        8AM–5:30PM
        <br>  
        Wednesday
        8AM–5:30PM
        <br>  
        Thursday
        8AM–5:30PM
        <br>  
        Friday
        8AM–5:30PM
        <br>  
        Saturday
        10AM-3PM
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.214723, lng:-80.205613},
    icon: '/images/paint.png',
    content: `
    <h2>Palm Collision Center</h2>
    <h3>Auto body shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Palm+Collision+Center+(A+Classic+Collision+Company)/@26.2147236,-80.2034244,17z/data=!3m1!4b1!4m7!3m6!1s0x88d90466da92f6c9:0xd7a01e465ac6dad!8m2!3d26.2147236!4d-80.2034244!9m1!1b1">4.7 ***** (48)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Palm+Collision+Center+(A+Classic+Collision+Company)/@26.2233476,-80.2987394,11z/data=!4m5!3m4!1s0x88d90466da92f6c9:0xd7a01e465ac6dad!8m2!3d26.2147236!4d-80.2034244">1122 S State Rd 7, North Lauderdale, FL 33068</a></h4>
    <h4><a class="info_link" target="_blank" href="http://palmcollisioncenter.com/">http://palmcollisioncenter.com/</a></h4>
    <h4>+19549684800</h4>
    <br>
    <p>
        Monday
        8AM–5:30PM
        <br>  
        Tuesday
        8AM–5:30PM
        <br>  
        Wednesday
        8AM–5:30PM
        <br>  
        Thursday
        8AM–5:30PM
        <br>  
        Friday
        8AM–5:30PM
        <br>  
        Saturday
        8AM-1:30PM
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.193450, lng:-80.237385},
    icon: '/images/car.png',
    content: `
    <h2>Automotive Super Services</h2>
    <h3>Auto repair shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Automotive+Super+Services/@26.1934502,-80.2373851,17z/data=!4m7!3m6!1s0x88d905cdfce24cd1:0xdb0ed883f38ae61c!8m2!3d26.1934502!4d-80.2373851!9m1!1b1">4.2 ***** (85)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Automotive+Super+Services/@26.1934502,-80.2373851,17z/data=!3m1!4b1!4m5!3m4!1s0x88d905cdfce24cd1:0xdb0ed883f38ae61c!8m2!3d26.1934502!4d-80.2373851">6460 W Commercial Blvd, Lauderhill, FL 33319</a></h4>
    <h4><a class="info_link" target="_blank" href="http://www.automotive-superservice.com/">http://www.automotive-superservice.com/</a></h4>
    <h4>+19547462846</h4>
    <br>
    <p>
        Monday
        7:30AM–6PM
        <br>  
        Tuesday
        7:30AM–6PM
        <br>  
        Wednesday
        7:30AM–6PM
        <br>  
        Thursday
        7:30AM–6PM
        <br>  
        Friday
        7:30AM–6PM
        <br>  
        Saturday
        7:30AM-5PM
        <br>  
        Sunday
        9AM-4PM
    </p>
    `
  },
  {
    coords:{lat:26.286292, lng:-80.237556},
    icon: '/images/car.png',
    content: `
    <h2>USP Euro Car Care</h2>
    <h3>Auto repair shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/USP+Euro+Car+Care/@26.2862927,-80.2375568,15z/data=!4m7!3m6!1s0x88d91b262cce289f:0xa8e6a8933edaebf8!8m2!3d26.286293!4d-80.228802!9m1!1b1">4.6 ***** (315)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/USP+Euro+Car+Care/@26.2862927,-80.2375568,15z/data=!3m1!4b1!4m5!3m4!1s0x88d91b262cce289f:0xa8e6a8933edaebf8!8m2!3d26.286293!4d-80.228802">7716 Wiles Rd, Coral Springs, FL 33067</a></h4>
    <h4><a class="info_link" target="_blank" href="http://www.uspeurocarcare.com/">http://www.uspeurocarcare.com/</a></h4>
    <h4>+19547557772</h4>
    <br>
    <p>
        Monday
        8AM–6PM
        <br>  
        Tuesday
        8AM–6PM
        <br>  
        Wednesday
        8AM–6PM
        <br>  
        Thursday
        8AM–6PM
        <br>  
        Friday
        8AM–6PM
        <br>  
        Saturday
        Closed
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.046475, lng:-80.215201},
    icon: '/images/paint.png',
    content: `
    <h2>Allied Paint & Body Shop</h2>
    <h3>Auto body shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Allied+Paint+%26+Body+Shop/@26.0464756,-80.2152018,15z/data=!4m7!3m6!1s0x88d9a99919e1a729:0x6be3d4716df0a074!8m2!3d26.0464759!4d-80.206447!9m1!1b1">4.1 ***** (22)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/Allied+Paint+%26+Body+Shop/@26.0464756,-80.2152018,15z/data=!3m1!4b1!4m5!3m4!1s0x88d9a99919e1a729:0x6be3d4716df0a074!8m2!3d26.0464759!4d-80.206447">5870 Stirling Rd, Hollywood, FL 33021</a></h4>
    <h4><a class="info_link" target="_blank" href="http://www.alliedpaint.com/">http://www.alliedpaint.com/</a></h4>
    <h4>+19549616351</h4>
    <br>
    <p>
        Monday
        8AM–5PM
        <br>  
        Tuesday
        8AM–5PM
        <br>  
        Wednesday
        8AM–5PM
        <br>  
        Thursday
        8AM–5PM
        <br>  
        Friday
        8AM–3PM
        <br>  
        Saturday
        Closed
        <br>  
        Sunday
        Closed
    </p>
    `
  },
  {
    coords:{lat:26.023128, lng:-80.152324},
    icon: '/images/tire.png',
    content: `
    <h2>World Tire & Auto Repair</h2>
    <h3>Tire shop</h3>
    <p><a class="info_link" target="_blank" href="https://www.google.com/maps/place/World+Tire+%26+Auto+Repair/@26.023128,-80.1523243,15z/data=!4m7!3m6!1s0x88d9aba80727064d:0x4338362aeb3db7b6!8m2!3d26.0231283!4d-80.1435695!9m1!1b1">3.8 ***** (80)</a></p>
    <br>
    <h4><a class="info_link" target="_blank" href="https://www.google.com/maps/place/World+Tire+%26+Auto+Repair/@26.023128,-80.1523243,15z/data=!3m1!4b1!4m5!3m4!1s0x88d9aba80727064d:0x4338362aeb3db7b6!8m2!3d26.0231283!4d-80.1435695">1314 N Federal Hwy, Hollywood, FL 33020</a></h4>
    <h4><a class="info_link" target="_blank" href="http://worldtirerepair.com/">http://worldtirerepair.com/</a></h4>
    <h4>+19549220650</h4>
    <br>
    <p>
        Monday
        8AM–6PM
        <br>  
        Tuesday
        8AM–6PM
        <br>  
        Wednesday
        8AM–6PM
        <br>  
        Thursday
        8AM–6PM
        <br>  
        Friday
        8AM–6PM
        <br>  
        Saturday
        8AM-4PM
        <br>  
        Sunday
        Closed
    </p>
    `
  },
];