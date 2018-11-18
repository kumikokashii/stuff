# Invoke library
# Documentation Home: http://www.pyinvoke.org/
# Getting Started: http://docs.pyinvoke.org/en/1.2/getting-started.html

from invoke import task
from datetime import date
from calendar import day_name


@task
def test1(c):
  c.run('date')
  print('*'*30)
  print('Are you happy?')
  print('*'*30)

@task(test1)  # This means whenever test2 is called, test1 runs first, then test2
def test2(c):
  c.run('ls')

@task
def test3(c, year, month, day):
  # Returns the day name (Moneay, Tuesday, etc.) of the given date
  d = date(int(year), int(month), int(day))
  d_index = d.weekday()
  d_name = day_name[d_index] 

  print('{} is {}'.format(d.strftime('%B %e, %Y'), d_name))
  return d_name


"""
How to call these functions?
On command line, "invoke [function name]", e.g. "invoke test2"

"invoke test1" output:
Sat Nov 17 22:36:28 PST 2018
******************************
Are you happy?
******************************

"invoke test2" output:
Sat Nov 17 22:37:23 PST 2018
******************************
Are you happy?
******************************
decorator.ipynb
named_tuple.ipynb
tasks.py

"invoke test3 1969 2 14" output:
February 14, 1969 is Friday

"""

