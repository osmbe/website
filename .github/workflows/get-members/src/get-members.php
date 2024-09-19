<?php

declare(strict_types=1);

use GuzzleHttp\Client;
use MailchimpMarketing\Api\ListsApi;
// use MailchimpMarketing\Api\PingApi;
use MailchimpMarketing\Configuration;

chdir(__DIR__.'/../');

require 'vendor/autoload.php';

$config = new Configuration();
$config->setConfig([
    'apiKey' => getenv('MAILCHIMP_API_KEY'),
    'server' => 'us13',
]);

// $response = (new PingApi($config))->get();
// print_r($response);

// $response = (new ListsApi($config))->getAllLists();
// print_r($response);

$members = [];

$response = (new ListsApi($config))->getListMembersInfo(list_id: 'cb93597490', count: 999, status: 'subscribed');

foreach ($response->members as $member) {
    $username = $member->merge_fields->OSMUSER;

    if (!empty($username)) {
        try {
            $client = new Client();

            $res = $client->request(
                'GET',
                sprintf('https://hdyc.neis-one.org/search/%s', $username)
            );

            $hdyc = json_decode((string) $res->getBody(), true);

            if (isset($hdyc['countries']['countries'])) {
                $countries = array_map(
                    function ($country) {
                        return explode('=', $country);
                    },
                    explode(';', $hdyc['countries']['countries'])
                );
                $belgium = array_column(array_filter($countries, fn ($country) => 'be' === $country[1]), 3);
            }

            $stats = [
                'since' => $hdyc['contributor']['since'] ?? null,
                'changesets' => [
                    'total' => intval($hdyc['changesets']['changes']),
                    'belgium' => isset($belgium[0]) ? intval($belgium[0]) : 0,
                ],
            ];
        } catch (Exception $e) {
            printf('%s (user: %s)%s', $e->getMessage(), $username, PHP_EOL);
        }
    } else {
        $stats = null;
    }

    $members[] = [
        'name' => $member->full_name,
        'first_name' => $member->merge_fields->FNAME,
        'last_name' => $member->merge_fields->LNAME,
        'username' => $username,
        'location' => trim($member->merge_fields->POSTCODE.' '.$member->merge_fields->PLACE),
        'timestamp' => $member->timestamp_opt,
        'stats' => $stats,
    ];

    printf('%s%s', $member->full_name, PHP_EOL);
}

file_put_contents('../../../_data/members.json', json_encode($members, JSON_PRETTY_PRINT));
