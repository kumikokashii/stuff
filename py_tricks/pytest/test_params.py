import pytest


# 1. Make up a custom func

def random_int_from_str(word):
  n = int(len(word) / 3)
  n += ord(word[0])
  return n


# 2. Create test cases

case1 = ('hohoho', 106)
case2 = ('Halloween', 75)
case3 = ('...', 47)
case4 = ("Let's go 2019!", 80)

cases = [case1, case2, case3, case4]


# 3. Test func with parametrize

@pytest.mark.parametrize('case', cases)
def test_random_int_from_str_1(case):
  c_word, c_int = case
  assert random_int_from_str(c_word) == c_int


# 4. Test log from above only shows case1, case2, etc.
#    We want the actual content of those cases in the log

@pytest.mark.parametrize('c_word, c_int', [('hohoho', 106), ('Halloween', 75), ('...', 47), ("Let's go 2019!", 80)])
def test_random_int_from_str_2(c_word, c_int):
  assert random_int_from_str(c_word) == c_int


# 5. Above works, but not practical to have that long list of parameters
#    Add ids for displaying

ids = ['{}-{}'.format(c_word, c_int) for (c_word, c_int) in cases]

@pytest.mark.parametrize('case', cases, ids=ids)
def test_random_int_from_str_3(case):
  c_word, c_int = case
  assert random_int_from_str(c_word) == c_int


