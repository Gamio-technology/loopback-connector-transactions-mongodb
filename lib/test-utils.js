// Copyright IBM Corp. 2014,2019. All Rights Reserved.
// Node module: loopback-connector-transactions-mongodb
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

exports.getDistanceBetweenPoints = function getDistanceBetweenPoints(
  point1,
  point2,
) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(point2.lat - point1.lat); // deg2rad below
  const dLon = deg2rad(point2.lng - point1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(point1.lat)) *
    Math.cos(deg2rad(point2.lat)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in km;
};

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

exports.deg2rad = deg2rad;
