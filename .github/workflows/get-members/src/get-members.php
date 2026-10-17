<?php

declare(strict_types=1);

use GuzzleHttp\Client;

chdir(__DIR__.'/../');

require 'vendor/autoload.php';

$client = new Client();

$response = $client->request('GET', 'https://listmonk.osm.be/api/subscribers?'.http_build_query([
    'list_id' => 3,
    'per_page' => 'all',
]), [
    'auth' => [getenv('LISTMONK_API_USERNAME'), getenv('LISTMONK_API_PASSWORD')],
    'headers' => [
        'Accept' => 'application/json',
    ],
]);

$members = [];

if (200 === $response->getStatusCode()) {
    $json = json_decode((string) $response->getBody(), true);

    if (isset($json['data']['results']) && is_array($json['data']['results'])) {
        foreach ($json['data']['results'] as $result) {
            if (isset($result['attribs']['member_since'])) {
                $datetime = new DateTime($result['attribs']['member_since'], new DateTimeZone('Europe/Brussels'));
                $member_since = $datetime
                    ->setTimezone(new DateTimeZone('UTC'))
                    ->format(DATE_ATOM)
                ;
            } else {
                $member_since = new DateTime($result['created_at']);
                $member_since = $member_since
                    ->setTimezone(new DateTimeZone('UTC'))
                    ->format(DATE_ATOM)
                ;
            }

            $members[] = [
                'name' => $result['name'],
                'username' => $result['attribs']['osm_username'] ?? null,
                'location' => $result['attribs']['city'] ?? null,
                'timestamp' => $member_since,
            ];
        }
    }
}

$timestamps = array_column($members, 'timestamp');
array_multisort($timestamps, SORT_ASC, $members);

file_put_contents('../../../data/members.json', json_encode($members, JSON_PRETTY_PRINT));

exit;
