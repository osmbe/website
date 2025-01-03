# Enable all rules by default
all
# Configure a few rules
rule 'MD002', :level => 2
rule 'MD007', :indent => 2
rule 'MD024', :allow_different_nesting => true
rule 'MD026', :punctuation => '.,;:!'
# Disable a few rules
exclude_rule 'MD013' # line-length
exclude_rule 'MD034' # bare-url-used ; needed to allow use of URLs in figure shortcode
exclude_rule 'MD041' # first-line-h1