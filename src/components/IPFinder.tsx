// @ts-nocheck

import { Grid } from '@mui/material';
import {
  StyledIPFinder,
  StyledIPFinderContainer,
  StyledIPFinderH2,
  StyledIPFinderH4,
  StyledIPFinderTitle,
} from '../styles';
import { useEffect, useState } from 'react';

const IPFinder = () => {
  const [IP, setIP] = useState('');
  const [URL, setURL] = useState('');
  const [dir, setDir] = useState('');
  const [ISP, setISP] = useState('');

  const getLocation = () => {
    const successCallback = (position) => {
      const url =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093734!2d' +
        position.coords.longitude +
        '!3d' +
        position.coords.latitude +
        '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a6b6e6b7bd%3A0x807f7e4f5b8d7d2b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1616539427712!5m2!1sen!2sus';
      setURL(url);
      fetch(
        'https://nominatim.openstreetmap.org/reverse.php?lat=' +
          position.coords.latitude +
          '&lon=' +
          position.coords.longitude +
          '&zoom=18&format=jsonv2'
      )
        .then((res) => res.json())
        .then((data) => {
          const addressArr = data.display_name.split(',');
          const lastThree = addressArr.slice(-3);
          const newDir = lastThree.join(', ');
          setDir(newDir);
        })
        .catch((err) => console.log(err));
    };
    const errorCallback = (err) => {
      console.log(err);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  useEffect(() => {
    const fetchData = () => {
      fetch('https://api.ipify.org/?format=json')
        .then((res) => res.json())
        .then((data) => {
          fetch(`http://ip-api.com/json/${data.ip}`)
            .then((res) => res.json())
            .then((data2) => setISP(data2.isp))
            .catch((err) => console.log(err));
          setIP(data.ip);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
    getLocation();
  }, []);

  return (
    <StyledIPFinderContainer id='ipfinder'>
      <StyledIPFinder>
        <StyledIPFinderTitle>IP Finder</StyledIPFinderTitle>
        <Grid container direction={'row'} justifyContent={'space-around'}>
          <Grid item>
            <StyledIPFinderH4>What is my IP adress?</StyledIPFinderH4>
            {IP && <StyledIPFinderH2>{IP}</StyledIPFinderH2>}
            <StyledIPFinderH4>Approximate location</StyledIPFinderH4>
            {dir && (
              <>
                <StyledIPFinderH2>{dir}</StyledIPFinderH2>
              </>
            )}
            <StyledIPFinderH4>Internet Service Provider(ISP):</StyledIPFinderH4>
            {ISP && <StyledIPFinderH2>{ISP}</StyledIPFinderH2>}
          </Grid>
          <Grid item>
            {URL && <iframe src={URL} width='300' height='300'></iframe>}{' '}
          </Grid>
        </Grid>
      </StyledIPFinder>
    </StyledIPFinderContainer>
  );
};

export default IPFinder;
