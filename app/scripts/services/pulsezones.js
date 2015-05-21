'use strict';

/**
 * @ngdoc service
 * @name healthCalculatorsApp.PulseZones
 * @description
 * # PulseZones
 * Service in the healthCalculatorsApp.
 */
angular.module('healthCalculatorsApp')
    .service('PulseZones', function () {
        var pulseZones = [
            {
                name: 'максимальный пульс 100%',
                factor: 1,
                className: 'active'
            },
            {
                name: 'зона VO2 max 90-100% (макcимальная нагрузка)',
                factor: .9,
                className: 'danger'
            },
            {
                name: 'анаэробная зона 80-90%(силовая тренировка)',
                factor: .8,
                className: 'warning'
            },
            {
                name: 'аэробная зона 70-80% (бег, велосипед)',
                factor: .7,
                className: 'success'
            },
            {
                name: 'жиросжигающая зона 60-70% (фитнес, ролики)',
                factor: .6,
                className: 'info'
            },
            {
                name: 'зона легкой активности 50-60% (разминка)',
                factor: .5,
                className: 'active'
            },
            {
                name: 'пульс покоя 0%',
                factor: 0,
                className: 'active'
            }
        ];
        return {
            get: function () {
                return pulseZones
            }
        }
    });
