# My first GA Project - Welcome to the Random Trivia Game because I can be random at times.

### Diana Hudson

DEPLOYED SITE: [Click Here](https://pisces7diana.github.io/Unit-1-Project-1/)

## Description on Project

A paragraph discussing the idea of your project, the API you are using and desired user experience.

> I am creating a trivia game of 20 random questions, consisting of my company Everlance, favorite t.v. show, coding, and miscellaneous. I am using Contentful to create the content type and obtaining the data from its API: https://cdn.contentful.com.
There will be 2 players (aka teams) that will take turn choosing an answer - the correct answer gets a point.

## Details about the API

Give me a brief description of the API you are using and how you plan on using it. Does it use some sort of authentication like an APIkey. List some of the urls are using below.

- `https://cdn.contentful.com.`: is the API Base URL and it's a read-only API. It returns a json array - in it, it has the items array, it contains the objects of fields that contains 20 questions, 3 answers to choose from, and the correct answer. I will access the data from Contentful API and pull it into my html file to create a trivia game website via fetch url.

Sample Ajax called:
``````js
const URL = "https://cdn.contentful.com/spaces/svw4d0i6i87i/environments/master/entries?access_token=nm9EiV_n2XckXPXr4VDqdfctvj7dvSPuEkK2Er5D9QA&&content_type=triviaq"
$.ajax(URL)
.then((data) => {
    questions = data.items.map((q) => q.fields)
    console.log(data)
})
``````

The data I get back:
```json
// 20231209170506
// https://cdn.contentful.com/spaces/svw4d0i6i87i/environments/master/entries?access_token=nm9EiV_n2XckXPXr4VDqdfctvj7dvSPuEkK2Er5D9QA&&content_type=triviaq

{
  "sys": {
    "type": "Array"
  },
  "total": 20,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "6bEBkqGFISjEB02MQNTOkH",
        "type": "Entry",
        "createdAt": "2023-12-09T00:00:41.305Z",
        "updatedAt": "2023-12-09T06:02:41.828Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "How can you use Everlance?",
        "a": "Play Store & App Store",
        "b": "Everlance Dashboard by going to www.everlance.com",
        "c": "All of the above",
        "answer": "All of the above"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "2SYUxWHrWIZIJmLRXOqboa",
        "type": "Entry",
        "createdAt": "2023-12-09T00:20:10.587Z",
        "updatedAt": "2023-12-09T05:37:26.440Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "How is const used?",
        "a": "Construction",
        "b": "to define a variable",
        "c": "Consistent",
        "answer": "to define a variable"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "2av66dStc37sxZxgNHsagu",
        "type": "Entry",
        "createdAt": "2023-12-09T00:30:40.323Z",
        "updatedAt": "2023-12-09T05:36:53.109Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What's the capital of U.S.?",
        "a": "Seattle, WA",
        "b": "Texas",
        "c": "Washington, D.C.",
        "answer": "Washington, D.C."
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "6TMU343ifonfnPYfgFHG29",
        "type": "Entry",
        "createdAt": "2023-12-09T00:17:52.553Z",
        "updatedAt": "2023-12-09T05:36:37.573Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "100 to the second power is",
        "a": "10,000",
        "b": "200",
        "c": "100",
        "answer": "10,000"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "45JEVKOrY9T1Pv6MwewTQa",
        "type": "Entry",
        "createdAt": "2023-12-09T00:26:19.339Z",
        "updatedAt": "2023-12-09T00:26:19.339Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "How many letters of the alphabet are there?",
        "a": "43",
        "b": "26",
        "c": "30",
        "answer": "26"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "6xFzmnO5zOoxxf8bM3ZfFR",
        "type": "Entry",
        "createdAt": "2023-12-09T00:15:12.297Z",
        "updatedAt": "2023-12-09T00:15:12.297Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What symbol indicates jQuery?",
        "a": "$",
        "b": "{",
        "c": "..",
        "answer": "$"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "6gdlkbC3zsy8WabQMMO1tT",
        "type": "Entry",
        "createdAt": "2023-12-09T00:13:04.140Z",
        "updatedAt": "2023-12-09T00:13:04.140Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "How do you set up a boilerplate in HTML file?",
        "a": "shift + ! + tab",
        "b": "! + tab + shift",
        "c": "Command + space bar",
        "answer": "shift + ! + tab"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "5owjyNMhue6vdnPFploD2E",
        "type": "Entry",
        "createdAt": "2023-12-09T00:09:18.177Z",
        "updatedAt": "2023-12-09T00:09:18.177Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "How many minutes equals an hour?",
        "a": "1",
        "b": "60",
        "c": "30",
        "answer": "60"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "24txa06Lc6tbBWBd1utSSJ",
        "type": "Entry",
        "createdAt": "2023-12-09T00:07:51.519Z",
        "updatedAt": "2023-12-09T00:07:51.519Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What code allows you to see what's inside of the folder?",
        "a": "sf",
        "b": "ls",
        "c": "the dot notation",
        "answer": "ls"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "6zbuwU1OQcJinqt1r15r5C",
        "type": "Entry",
        "createdAt": "2023-12-08T23:38:58.060Z",
        "updatedAt": "2023-12-09T00:05:45.357Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Where is the F.R.I.E.N.D.S building?",
        "a": "Hollywood, CA",
        "b": "New York",
        "c": "Boston, MA",
        "answer": "New York"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "1ymopZ1iKjkLdwXL80KlsX",
        "type": "Entry",
        "createdAt": "2023-12-09T00:03:25.409Z",
        "updatedAt": "2023-12-09T00:03:25.409Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "How many kids did Chandler and Monica adopted?",
        "a": "0",
        "b": "Twins",
        "c": "1",
        "answer": "Twins"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "7wwvVP59AoWSBPAzEXdHL",
        "type": "Entry",
        "createdAt": "2023-12-08T23:57:56.273Z",
        "updatedAt": "2023-12-08T23:57:56.273Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Where is Everlance HQ located?",
        "a": "San Francisco, CA",
        "b": "San Diego, CA",
        "c": "Cancun, MX",
        "answer": "San Francisco, CA"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "23AMUIixtwj82tWKGZYDXm",
        "type": "Entry",
        "createdAt": "2023-12-08T23:56:25.730Z",
        "updatedAt": "2023-12-08T23:56:25.730Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What was the theme song of F.R.I.E.N.D.S?",
        "a": "Love Like This by Ben Rector",
        "b": "At Last by Etta James",
        "c": "I'll Be There for You Song by The Rembrandts",
        "answer": "I'll Be There for You Song by The Rembrandts"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "1dKRxb3ZeOjlqCgUbfMt8a",
        "type": "Entry",
        "createdAt": "2023-12-08T23:49:51.984Z",
        "updatedAt": "2023-12-08T23:49:51.984Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "In coding, what does mkdir mean?",
        "a": "make directory",
        "b": "None of the answers",
        "c": "create a new file",
        "answer": "make directory"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "4ntqBBqAjfFVcIN1svdtEy",
        "type": "Entry",
        "createdAt": "2023-12-08T23:46:58.792Z",
        "updatedAt": "2023-12-08T23:46:58.792Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What state is abbreviated as IN?",
        "a": "India",
        "b": "Indiana",
        "c": "Indigo",
        "answer": "Indiana"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "4rSeY3B73zLnu4jecwVXpv",
        "type": "Entry",
        "createdAt": "2023-12-08T23:41:27.445Z",
        "updatedAt": "2023-12-08T23:41:27.445Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "When was F.R.I.E.N.D.S aired on t.v.?",
        "a": "May 6, 2004",
        "b": "It never did.",
        "c": "September 22, 1994",
        "answer": "September 22, 1994"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "2e5DhpXzIJ8CCF0mLgA0GP",
        "type": "Entry",
        "createdAt": "2023-12-08T23:37:02.958Z",
        "updatedAt": "2023-12-08T23:37:02.958Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "How many F.R.I.E.N.D.S main characters were there?",
        "a": "3",
        "b": "6",
        "c": "12",
        "answer": "6"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "4WMQM3RLmL8J4NXFABzL3z",
        "type": "Entry",
        "createdAt": "2023-12-08T22:18:15.247Z",
        "updatedAt": "2023-12-08T23:24:31.968Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "How can you reach Everlance?",
        "a": "In your dreams",
        "b": "A knock on the door",
        "c": "Via email: support@everlance.com and/or call (872) 814-6308",
        "answer": "Via email: support@everlance.com and/or call (872) 814-6308"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "2NYkdUR7WhRHRp4bc20P6Q",
        "type": "Entry",
        "createdAt": "2023-12-08T22:16:10.196Z",
        "updatedAt": "2023-12-08T23:18:30.652Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Who can use Everlance?",
        "a": "Companies",
        "b": "Self-Employed",
        "c": "All of the above",
        "answer": "All of the above"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "svw4d0i6i87i"
          }
        },
        "id": "31ZF1x93v2nHGPaV2FlrsM",
        "type": "Entry",
        "createdAt": "2023-12-08T22:13:04.993Z",
        "updatedAt": "2023-12-08T22:13:04.993Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaq"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What is Everlance?",
        "a": "Mileage and expense tracking app",
        "b": "Clothing retailer",
        "c": "None of the above",
        "answer": "Mileage and expense tracking app"
      }
    }
  ]
}
```

## Mockup

Here put a mix of text explanation plus a picture giving us an idea of the layout of your website.

1. Header - "My GA Trivia Game"
2. Questions box where the player (aka team) will see one question is asked at a time
3. A box with 3 answers A, B, C to choose from
4. Team Board scores to see how many points the team has received, each time they choose the correct answer, the score increases

![Imgur](https://i.imgur.com/ZxIptuu.png)

#### Desktop View

![My Desktop View](https://i.imgur.com/0kmsIxP.png)

#### Mobile View

![My Mobile View](https://i.imgur.com/8CuLoWl.jpg)

## Schedule of Work

|Day | Goal | What I did accomplish |
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval | |
| Sun | Build fetch of data in JS file ||
| Mon | Render data from API on screen ||
| Tues| Build form for user to interact with ||
| Wed | wrap up functionality ||
|Thurs| mobile layout styling ||
| Fri | Desktop layout styling ||
| Sat | Present Project ||