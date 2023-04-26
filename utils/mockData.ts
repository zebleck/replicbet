import { User, Bet, Study, Outcome } from '@/types/global';

export const mockUsers: User[] = [
	{
	  _id: 1,
	  username: 'user1',
	  password: 'password1',
	  balance: 1000,
	},
	{
	  _id: 2,
	  username: 'user2',
	  password: 'password2',
	  balance: 500,
	},
];
  
const mockBets: Bet[] = [
	{
	  _id: '1',
	  userId: 1,
	  studyId: 1,
	  outcome: {
		result: 'success',
		date: new Date('2023-05-01'),
	  },
	  amount: 100,
	  result: {
		success: true,
	  },
	},
	{
	  _id: '2',
	  userId: 2,
	  studyId: 1,
	  outcome: {
		result: 'failure',
		date: new Date('2023-05-01'),
	  },
	  amount: 50,
	  result: {
		success: false,
	  },
	},
];
  
export const mockStudies: Study[] = [
	{
	  id: 1,
	  name: 'Observation of Gravitational Waves from a Binary Black Hole Merger',
    url: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.061102',
	  description: 'On September 14, 2015 at 09:50:45 UTC, the Laser Interferometer Gravitational-Wave Observatory (LIGO) observed a transient gravitational-wave signal from a source at a luminosity distance of 410+160−180 Mpc. The signal, with a peak gravitational-wave strain of 1.0×10−21, matches the waveform predicted by general relativity for the inspiral and merger of a pair of black holes and the ringdown of the resulting single black hole. The initial black hole masses are estimated to be 36+5−4 M⊙ and 29+4−4 M⊙, and the final black hole mass is 62+4−4 M⊙. The observation provides the first direct detection of gravitational waves and the first observation of a binary black hole merger, and confirms the existence of binary stellar-mass black hole systems. The results have been subject to replication attempts by independent research groups.',
	  likelihood: 0.7,
	  effectSize: 0.2,
	  replicationData: {},
	  outcome: {
		result: 'success',
		date: new Date('2023-05-01'),
	  },
	  bets: [mockBets[0], mockBets[1]],
	},
	{
	  id: 2,
	  name: 'Measurement of the Anisotropy of Cosmic Ray Arrival Directions with IceCube',
    url: 'https://ui.adsabs.harvard.edu/abs/2010ApJ...718L.194A/abstract',
	  description: 'The study reports the first observation of an anisotropy in the arrival direction of cosmic rays with energies in the multi-TeV region in the Southern sky, using data from the IceCube detector. The detector was operated between June 2007 and March 2008 with 1320 optical sensors distributed over 22 strings at depths between 1450 and 2450 meters inside the Antarctic ice. The data include 4.3 billion muons produced by downgoing cosmic ray interactions in the atmosphere. The arrival direction distribution of these muons exhibits an anisotropy in right ascension with a first harmonic amplitude of (6.4±0.2stat.±0.8syst.)×10−4. The study is significant for providing insights into the origin and propagation of cosmic rays in the universe.',
	  likelihood: 0.5,
	  effectSize: 0.1,
	  replicationData: {},
	  outcome: null,
	  bets: [],
	},
];
  