module.exports = {
  themeConfig: {
    logo: '/assets/img/img.gif',
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
        ],
        '/learn/network/': [
            '', 
        ],
        '/learn/data_structure_algorithms/': [
            '', 
        ],
      
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
         { text: 'Languages', link: '/others/javascript/' },
         { text: 'Front-end', link: '/others/front-end/' },
         { text: 'Back-end', link: '/others/back-end/' },
        ]
      },
      { text: 'How I Fall',
        items: [
         { text: 'My Real Stories', link: '/fall/real-stories/' },
          { text: 'Personal Problems', link: '/fall/personal-problems/' },
          { text: 'Some Words', link: '/fall/some-words/' },
        ]
      },
      { text: 'Some Ideas',
        items: [
          { text: 'Learning Structure', link: '/ideas/learning/' },
          { text: 'Some Words', link: '/fall/some-words/' },
        ]
      },
      { text: 'Explore ..',
        items: [
          { text: 'Me', link: '/explore/me/' },
          { text: 'The world is infinite, and the journey itself is home', link: '/explore/travel/' },
          { text: 'DJ & Music', link: '/explore/dj-music/' },
          { text: 'Buddhism teaches me the most in my life', link: '/explore/buddhism/' },
          { text: 'Psychology & Body', link: '/explore/psychology-body/' },
          { text: 'Ancient chinese wisdom that I appreciate ', link: '/explore/chinese-wisdom/' },
          { text: 'Some Dreams ', link: '/explore/some-dreams/' },{ text: 'Omdalarrarahang! ', link: '/explore/magic/' },
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