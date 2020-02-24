export class RouteList {

}
const routeItem = [
    {
        name: 'Cloud',
        route: '/cloud',
        type: 'Main',
        children: [
            {name: 'Microsoft Azure', route: '/cloud/microsoft-azure', type: 'sub'},
            {name: 'IOT', route: '/cloud/iot', type: 'sub'},
            {name: 'Database', route: '/cloud/database', type: 'sub'}
        ]
    },
    {
        name: 'Web',
        route: '/web',
        type: 'Main',
        children: [
            {name: 'Content Management System', route: '/Web/content-management-system', type: 'sub'},
            {name: 'Integrationer', route: '/web/integrationer', type: 'sub'},
            {name: 'Hjemmesider', route: '/web/hjemmesider', type: 'sub'}
        ]
    },    {
        name: 'Mobile',
        route: '/mobile',
        type: 'Main',
        children: [
            {name: 'IOS', route: '/mobile/ios', type: 'sub'},
            {name: 'Android', route: '/mobile/android', type: 'sub'},
            {name: 'Cross Platform', route: '/mobile/cross-platform', type: 'sub'}
        ]
    },
    {
        name: 'Support',
        route: '/support',
        type: 'Main',
        children: [
            {name: 'IT-as-a-service', route: '/support/it-as-a-service', type: 'sub'},
            {name: 'Project-as-a-service', route: '/support/project-as-a-service', type: 'sub'},
            {name: 'IT konsulent assistance', route: '/support/it-konsulent-assistance', type: 'sub'}
        ]
    }
]