import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class ReportComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['org', 'lowerEnvironmentMaxInstances', 'upperEnvironmentMaxInstances'];
  expandedElement: AIReportElement | null;
  constructor() { }

  ngOnInit() {
  }

}

export interface AIReportElement {
  org: string;
  lowerEnvironmentMaxInstances: number;
  upperEnvironmentMaxInstances: number;
  lowerDetails: AIReportDetailElement[];
  upperDetails: AIReportDetailElement[];
}

export interface AIReportDetailElement {
  foundation: string;
  space: string;
  app: string;
  instances: number;
}

const ELEMENT_DATA: AIReportElement[] = [
  {
    org: 'Pivotal',
    lowerEnvironmentMaxInstances: 22,
    upperEnvironmentMaxInstances: 14,
    lowerDetails: [
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'Test App',
        instances: 5
      },
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'TestMan.v1.0.3',
        instances: 3
      },
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'TestMan.v1.0.4',
        instances: 2
      },
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'TestMan.v1.0.5',
        instances: 1
      },
      {
        foundation: 'QA',
        space: 'Some Space',
        app: 'TestMan-perform',
        instances: 11
      }
    ],
    upperDetails: [
      {
        foundation: 'STAG',
        space: 'Real Space',
        app: 'TheTrueApp',
        instances: 5
      },
      {
        foundation: 'PROD',
        space: 'OuterSpace',
        app: 'RealApp',
        instances: 9
      }
    ]
  },
  {
    org: 'Dell',
    lowerEnvironmentMaxInstances: 12,
    upperEnvironmentMaxInstances: 8,
    lowerDetails: [
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'Test App',
        instances: 3
      },
      {
        foundation: 'QA',
        space: 'Some Space',
        app: 'TestMan',
        instances: 9
      }
    ],
    upperDetails: [
      {
        foundation: 'STAG',
        space: 'Real Space',
        app: 'TheTrueApp',
        instances: 2
      },
      {
        foundation: 'STAG',
        space: 'OuterSpace',
        app: 'RealApp',
        instances: 1
      },
      {
        foundation: 'PROD',
        space: 'Test Space',
        app: 'InnerSpace',
        instances: 5
      }
    ]
  },
  {
    org: 'EMC',
    lowerEnvironmentMaxInstances: 12,
    upperEnvironmentMaxInstances: 8,
    lowerDetails: [
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'Test App',
        instances: 3
      },
      {
        foundation: 'QA',
        space: 'Some Space',
        app: 'TestMan',
        instances: 9
      }
    ],
    upperDetails: [
      {
        foundation: 'STAG',
        space: 'Real Space',
        app: 'TheTrueApp',
        instances: 2
      },
      {
        foundation: 'STAG',
        space: 'OuterSpace',
        app: 'RealApp',
        instances: 1
      },
      {
        foundation: 'PROD',
        space: 'Test Space',
        app: 'InnerSpace',
        instances: 5
      }
    ]
  },
  {
    org: 'Tracker',
    lowerEnvironmentMaxInstances: 22,
    upperEnvironmentMaxInstances: 14,
    lowerDetails: [
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'Test App',
        instances: 5
      },
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'TestMan.v1.0.3',
        instances: 3
      },
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'TestMan.v1.0.4',
        instances: 2
      },
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'TestMan.v1.0.5',
        instances: 1
      },
      {
        foundation: 'QA',
        space: 'Some Space',
        app: 'TestMan-perform',
        instances: 11
      }
    ],
    upperDetails: [
      {
        foundation: 'STAG',
        space: 'Real Space',
        app: 'TheTrueApp',
        instances: 5
      },
      {
        foundation: 'PROD',
        space: 'OuterSpace',
        app: 'RealApp',
        instances: 9
      }
    ]
  },
  {
    org: 'Greenplum',
    lowerEnvironmentMaxInstances: 12,
    upperEnvironmentMaxInstances: 8,
    lowerDetails: [
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'Test App',
        instances: 3
      },
      {
        foundation: 'QA',
        space: 'Some Space',
        app: 'TestMan',
        instances: 9
      }
    ],
    upperDetails: [
      {
        foundation: 'STAG',
        space: 'Real Space',
        app: 'TheTrueApp',
        instances: 2
      },
      {
        foundation: 'STAG',
        space: 'OuterSpace',
        app: 'RealApp',
        instances: 1
      },
      {
        foundation: 'PROD',
        space: 'Test Space',
        app: 'InnerSpace',
        instances: 5
      }
    ]
  },
  {
    org: 'APLE',
    lowerEnvironmentMaxInstances: 22,
    upperEnvironmentMaxInstances: 14,
    lowerDetails: [
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'Test App',
        instances: 5
      },
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'TestMan.v1.0.3',
        instances: 3
      },
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'TestMan.v1.0.4',
        instances: 2
      },
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'TestMan.v1.0.5',
        instances: 1
      },
      {
        foundation: 'QA',
        space: 'Some Space',
        app: 'TestMan-perform',
        instances: 11
      }
    ],
    upperDetails: [
      {
        foundation: 'STAG',
        space: 'Real Space',
        app: 'TheTrueApp',
        instances: 5
      },
      {
        foundation: 'PROD',
        space: 'OuterSpace',
        app: 'RealApp',
        instances: 9
      }
    ]
  },
  {
    org: 'Labs',
    lowerEnvironmentMaxInstances: 12,
    upperEnvironmentMaxInstances: 8,
    lowerDetails: [
      {
        foundation: 'Dev',
        space: 'Test Space',
        app: 'Test App',
        instances: 3
      },
      {
        foundation: 'QA',
        space: 'Some Space',
        app: 'TestMan',
        instances: 9
      }
    ],
    upperDetails: [
      {
        foundation: 'STAG',
        space: 'Real Space',
        app: 'TheTrueApp',
        instances: 2
      },
      {
        foundation: 'STAG',
        space: 'OuterSpace',
        app: 'RealApp',
        instances: 1
      },
      {
        foundation: 'PROD',
        space: 'Test Space',
        app: 'InnerSpace',
        instances: 5
      }
    ]
  }
];
