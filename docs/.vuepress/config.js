module.exports = {
    title: "Hang's Blog",
    
  themeConfig: {
    logo: '/assets/img/img.jpg',
    description: "Tech and Life Blog",
    smoothScroll: true,
    sidebar: {
      '/learn/foundations/': [
        '',     /* /foo/ */
        'Intro',  /* /foo/one.html */
        'Number_Systems',
        'Data_Storage',
        'Operations_on_Data',
        'Computer_Organization',
         'Computer_Networks_and_Internet',
         'Operating_Systems',
        'Algorithms',
         'Programming_Languages',
         'Software_Engineering',
        'Data_Structure',
        'Abstract_Data_Types',
        'File_Structure',
        'Databases',
        'Data_Compression',
        'Security',
        'Theory_of_Computation',
        'Artificial_Intelligence',
        

      ],
        '/learn/computer_organization/': [
            '', 
        ],
        '/learn/operating_systems/': [
            '', 
            '1_overview',
            '2_process_management',
            '3_memory_management',
            '4_storage_management',
            '5_protection_and_security',
            '6_advanced_topics',
            '7_case_study'
        ],
        '/learn/network/': [
            '', 
        ],
        '/learn/data_structure_algorithms/': [
            '', 
        ],
        '/others/languages/':[
            '',
            'javascript',
            'java'
        ],
        '/others/front-end/':[
            '',
            'react',
            'vue'
        ],
        '/others/back-end/':[
            '',
            'nodejs',
            'java-back'
        ],
        '/fall/':[
            'cv',
            'personal-problems',
    
            'some-words'
        ],
        '/explore/':[
            'me',
            'travel',
    'dj-music',
            'buddhism',
            'psy_body',
            'wisdom',
            'dreams',
            'magic'
        ]
        

      
    },
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      
      { text: 'Important Basic',
      link: '/learn/',
        items: [
          { text: 'Foundations of Computer Science', link: '/learn/foundations/' },
          { text: 'Computer Organization', link: '/learn/computer_organization/' }, 
          { text: 'Operating Systems', link: '/learn/operating_systems/' },
          { text: 'Computer Network', link: '/learn/network/' },
         
          { text: 'Data Structure & Algorithms', link: '/learn/data_structure_algorithms/' }
        ]
      },
      { text: 'Others',
        items: [
         { text: 'Languages', items: [{ text: 'Javascipt', link: '/others/languages/javascript/' },{ text: 'Java', link: '/others/languages/java/' },] },
         { text: 'Front-end', items: [{ text: 'React', link: '/others/front-end/react/' },{ text: 'Vue', link: '/others/front-end/vue/' },] },
         { text: 'Back-end', items: [{ text: 'Node.js', link: '/others/back-end/nodejs/' },{ text: 'Java', link: '/others/back-end/java-back/' },] },
        ]
      },
      { text: 'How I Fall',
        items: [
         { text: 'CV of Real', link: '/fall/cv/' },
          { text: 'Personal Problems', link: '/fall/personal-problems/' },
          { text: 'Some Words', link: '/fall/some-words/' },
        ]
      },
      { text: 'Some Ideas',
        items: [
          { text: 'Knowledge Structure!', link: '/ideas/structure/' },
          { text: 'Some Words', link: '/fall/some-words/' },
        ]
      },
      { text: 'Explore ..',
        items: [
          { text: 'Me', link: '/explore/me/' },
          { text: 'The world is infinite, and the journey itself is home', link: '/explore/travel/' },
          { text: 'DJ & Music', link: '/explore/dj-music/' },
          { text: 'Buddhism teaches me the most in my life', link: '/explore/buddhism/' },
          { text: 'Psychology & Body', link: '/explore/psy_body/' },
          { text: 'Wisdom that I appreciate', link: '/explore/wisdom/' },
          { text: 'Some Dreams ', link: '/explore/dreams/' },
          { text: 'Omdalarrarahang! ', link: '/explore/magic/' },
        ]
      },
      { text: 'teest',
        items: [
          { text: 'Group1', items: [{ text: '1', link: '/ideas/learning/' },{ text: '2', link: '/ideas/learning/' },] },
          { text: 'Group2', items: [{ text: '2', link: '/ideas/learning/' },] }
        ]
      },
      { text: '', link: 'https://google.com' },
    ]
  }
}