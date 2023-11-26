const products = [
    {
      'id' : 10318,
      'name': 'Concorde',
      'year': 2023,
      'deprecated': 'False', 
      'label' : 'Transportation',
      'collection' : 'Icons',
      'price': 199.99,
      'description': 'Create a detailed replica of the world\'s most famous commercial supersonic passenger plane with a fully immersive project that makes imagination soar.',
      "image": "https://www.lego.com/cdn/cs/set/assets/bltd56ac1c273e08f9f/10318_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id' : 10307,
      'name': 'Eiffel Tower',
      'year': 2023,
      'deprecated': 'False', 
      'label' : 'Monuments',
      'collection' : 'Icons',
      'price': 629.99,
      'description': 'Do you want to build Paris in your house?',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt95b2930fbcf9ea6b/10307_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id' : 10276,
      'name': 'Coliseum',
      'year': 2021,
      'deprecated': 'False', 
      'label' : 'Monuments',
      'collection' : 'Icons',
      'price': 549.99,
      'description': 'The most iconic Roman Empire monument now in your living room.',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt26cc4dd7f5cf656e/10276_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id' : 10294,
      'name': 'Titanic',
      'year': 2019,
      'deprecated': 'False', 
      'label' : 'Transportation',
      'collection' : 'Icons',
      'price': 679.99,
      'description': 'Make sure it does not hit the ice and sinks.',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt4970f39471f38330/10294_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id' : 10317,
      'name': 'Land Rover Classic Defender 90',
      'year': 2023,
      'deprecated': 'False', 
      'label' : 'Transportation',
      'collection' : 'Icons',
      'price': 239.99,
      'description': 'The LEGO® Icons Land Rover Classic Defender 90 set offers a fully immersive building experience for Land Rover fans and LEGO car fans alike. The design is a faithful interpretation of the original 1983 model, and features a steering mechanism, suspension system and an interior full of authentic details. With two customization options, you can keep the elegant classic version of the Land Rover or add accessories and equipment for an incredible off-road adventure.',
      "image": "https://www.lego.com/cdn/cs/set/assets/blta01f16018dc07d86/10317_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id' : 10298,
      'name': 'Vespa 125',
      'year': 2022,
      'deprecated': 'False', 
      'label' : 'Transportation',
      'collection' : 'Icons',
      'price': 99.99,
      'description': 'Build and display your own model version of an Italian icon with the LEGO® Vespa 125 set, inspired by the classic 1960s Vespa.',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt776313b1b4b2037f/10298_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id' : 10306,
      'name': 'Atari® 2600',
      'year': 2022,
      'deprecated': 'False', 
      'label' : 'Gaming',
      'collection' : 'Icons',
      'price': 239.99,
      'description': 'Are you ready. player 1?',
      "image": "https://www.lego.com/cdn/cs/set/assets/bltfe23f93b1245c20f/10306_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id' : 21327,
      'name': 'Typewriter',
      'year': 2022,
      'deprecated': 'False', 
      'label' : 'Objects',
      'collection' : 'LEGO® Ideas',
      'price': 249.99,
      'description': 'Bring a touch of nostalgia to your desk',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt541746749ecc92c3/21327_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id' : 21342,
      'name': 'Insect Collection',
      'year': 2023,
      'deprecated': 'False', 
      'label' : 'Animals',
      'collection' : 'LEGO® Ideas',
      'price': 79.99,
      'description': 'Bring extraordinary creatures to life with these life-size, realistic display models of three beautiful insects.',
      "image": "https://www.lego.com/cdn/cs/set/assets/bltc49c2a0af0b77684/21342_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id' : 10323,
      'name': 'PAC-MAN machine',
      'year': 2022,
      'deprecated': 'False', 
      'label' : 'Gaming',
      'collection' : 'Icons',
      'price': 269.99,
      'description': 'The new LEGO® Icons PAC-MAN Machine set is a non-playable video game system that\'s packed with great details from the classic game.',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt6a615254f84256ed/10323_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id': 40573,
      'name': 'Christmas Tree',
      'year': 2020,
      'deprecated': 'False', 
      'price': 49.99,
      'label' : 'Christmas',
      'collection' : 'None',
      'description': 'Create a striking festive ornament with the wonderful LEGO® Christmas Tree (40573) building kit. This beautiful tree is adorned with colorful elements and candles and stands on an elegant little rug. Place the yellow star on the top for the perfect finishing touch. This "2 in 1" model allows you to build one single tree or two smaller ones.',
      "image": "https://www.lego.com/cdn/cs/set/assets/bltc685cbf2b23fe191/40573_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id': 10281,
      'name': 'Bonsai',
      'year': 2022,
      'deprecated': 'False', 
      'price': 49.99,
      'label' : 'Japan',
      'collection' : 'Icons',
      'description': 'The bonsai, a traditional symbol of harmony and balance, will bring a touch of calm to your world with this creative model.',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt27be66663e247920/10281_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id': 21330,
      'name': 'Home Alone',
      'year': 2021,
      'deprecated': 'False', 
      'price': 299.99,
      'label' : 'Christmas',
      'collection' : 'LEGO® Ideas',
      'description': 'Make the holidays even more fun with the new Home Alone set from LEGO® Ideas.',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt9c69d4a46c794509/21330_box1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id': 10325,
      'name': 'Alpine Shelter',
      'year': 2022,
      'deprecated': 'False', 
      'price': 99.99,
      'label' : 'Christmas',
      'collection' : 'Icons',
      'description': 'With tons of details, from Christmas-themed guest rooms to log-burning fireplaces, an outdoor skating area and even a toilet, the LEGO® Icons Alpine Shelter set is a fun and rewarding addition to your LEGO Christmas set collection.',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt476547efc6c46393/10325_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id': 10308,
      'name': 'Main Street at Christmas',
      'year': 2022,
      'deprecated': 'False', 
      'price': 99.99,
      'label' : 'Christmas',
      'collection' : 'Icons',
      'description': 'The city\'s busy sidewalks are dressed in celebration.',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt8b024f8e41a76335/10308_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id': 40499,
      'name': 'Santa\'s sleigh',
      'year': 2017,
      'deprecated': 'True', 
      'price': 39.99,
      'label' : 'Christmas',
      'collection' : 'None',
      'description': 'Santa will visit your home along four deers.',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt14f17fe4da1d7611/40499_alt2.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id' : 10299,
      'name': 'Real Madrid Stadium Santiago Bernabéu',
      'year': 2016,
      'deprecated': 'True',
      'price': 399.99,
      'label' : 'Stadium',
      'collection' : 'Icons',
      'description': 'Historia que tú hiciste, historia por hacer. Build the temple of the most successful football team ever. ',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt1b140155c838b7b4/10299_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    },
    {
      'id': 40426,
      'name': 'Christmas wreath',
      'year': 2021,
      'deprecated': 'True', 
      'price': 39.99,
      'label' : 'Christmas',
      'collection' : 'None',
      'description': 'Decorate your door with this shinny wreath.',
      "image": "https://www.lego.com/cdn/cs/set/assets/blt09a5620a95c6f0ab/40426_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
    }
  ]

  export default products;
