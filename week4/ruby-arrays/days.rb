# 1. Create an array of the days of the week
#
# Create a variable named days_of_the_week as an array of the following:
# Monday # Tuesday # Wednesday # Thursday # Friday # Saturday # Sunday
# 2. My calendar says the first day is Sunday...
#
# Remove Sunday from the last postion and move it to the first position. Use array methods.

# 3. Create a new array of the days of the week:
#
# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends
#
# Your choice...
#
# 5. Sort the remaining days alphabetically
require 'pry'
binding.pry

days_of_the_week = %w{ Monday Tuesday Wednesday Thursday Friday Saturday Sunday }

# 2.
# moving_day = days_of_the_week.pop
# days_of_the_week.unshift( moving_day )
#
# less readable:
# days_of_the_week.unshift( days_of_the_week.pop )

# days_of_the_week.rotate -1       # RTFM!





# re-initialise our array after the destructive methods above
days_of_the_week = %w{ Monday Tuesday Wednesday Thursday Friday Saturday Sunday }


# 3.
week_days    = days_of_the_week[0..5]
weekend_days = days_of_the_week[6..7]
week_parts   = [ week_days, weekend_days ]   # add both ranges as elements of a new array
p week_parts
# one line, without the intermediate variables:
# week_parts = [  days_of_the_week[0..5], days_of_the_week[6..7] ]

# 4.
# week_parts.delete_at 1
week_parts.pop

# 5.
# This won't work because week_parts now has only one element, i.e. an array of week days
# sorted = week_parts.sort

# we'll need to sort that first element specifically:
# sorted = week_parts[0].sort

# or we could use the flatten method to make sure there is no nesting in our array:
sorted = week_parts.flatten.sort


binding.pry
