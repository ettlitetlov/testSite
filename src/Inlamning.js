import React, { Component } from 'react';
import styles from './Inlamning.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';
import Card from './Card';
import Footer from './Footer';

class Inlamning extends Component {
  render() {
    return (
    	[
      <Nav absolute={true} />,
      <div className={styles.container} >
        <div className={styles.splash}>
          <max>
            <h1 className={styles.title}>Materialinlämning</h1>
          </max>
        </div>
        <div className={styles.description}>
          <max>
            <h5 className={styles.descriptionText}>
              Här kan du lämna in ditt material. Lorem ipsum yada materila är najs woo. Bra kvalite ska det var apå det också
            </h5>
          </max>
        </div>
        <max>
          <div className={styles.cardContainer}>
            
              <Card title="Print" icon={["far","newspaper"]} description="Här lämnar du in allt från artiklar till nyhetsinslag" link="http://193.234.168.39/cargo/CargoForms_3.0.html;jsessionid=82F11E690DED3E626DE9E6D9AB298545?t=1542014462096&uuid=9fff4e99-a756-4657-b44a-9d32991ef662&sid=9da1ba94-71f&cargoRequest=openProfile&PUID=fc45b984-8ac1-46bd-a066-16aa909dc619" />
              <Card title="Digital" icon={["fas","desktop"]} description="Annonserna på våra webbsajter som sköts centralt av NTM Digital Produktion" link="https://ocast.com/sv-se/groups/ostgota-media-3261/adspecs" />
              <Card title="WebbTV" icon={["fas","video"]} description="Nå ut i form av video via TV eller Webb. Och lite mer text kanske" link="https://ocast.com/sv-se/groups/ostgota-media-3261/adspecs/webb-tv-2988"/>
              <Card title="OHH" icon={["fas","solar-panel"]} description="Visa upp ditt budskap utomhus där alla kan se det" link="https://ocast.com/sv-se/groups/ostgota-media-3261/adspecs/ooh-2968" />
            
          </div>
        </max>
      </div>,
      <Footer />
      ]
    );
  }
}

export default Inlamning;
