import { Injectable } from '@angular/core';

export interface RouteItem {
    name: string;
    route: string;
    type: string;
}

export interface Route {
    name: string;
    route: string;
    type: string;
    routes: RouteItem[];
}

const routes = [
    {
        name: 'Cloud',
        route: '/cloud',
        type: 'Main',
        routes: [
            {name: 'Microsoft Azure', route: '/microsoft-azure', type: 'sub'},
            {name: 'IOT', route: '/iot', type: 'sub'},
            {name: 'Database', route: '/database', type: 'sub'}
        ]
    },
    {
        name: 'Web',
        route: '/web',
        type: 'Main',
        routes: [
            {name: 'Content Management System', route: '/content-management-system', type: 'sub'},
            {name: 'Integrationer', route: '/integrationer', type: 'sub'},
            {name: 'Hjemmesider', route: '/hjemmesider', type: 'sub'}
        ]
    },    {
        name: 'Mobile',
        route: '/mobile',
        type: 'Main',
        routes: [
            {name: 'IOS', route: '/ios', type: 'sub'},
            {name: 'Android', route: '/android', type: 'sub'},
            {name: 'Cross Platform', route: '/cross-platform', type: 'sub'}
        ]
    },
    {
        name: 'Support',
        route: '/support',
        type: 'Main',
        routes: [
            {name: 'IT-as-a-service', route: '/it-as-a-service', type: 'sub'},
            {name: 'Project-as-a-service', route: '/project-as-a-service', type: 'sub'},
            {name: 'IT konsulent assistance', route: '/it-konsulent-assistance', type: 'sub'}
        ]
    }
];

@Injectable()
export class RouteList {
    getRoutes(): Route[] {
        return routes;
    }
}
