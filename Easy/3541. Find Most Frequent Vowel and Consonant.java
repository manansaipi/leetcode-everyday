
import java.util.*;

class Solution {
    public int maxFreqSum(String s) {
        int maxVowel = 0;
        int maxConsonant = 0;
        String[] listVowels = new String[]{"a", "i", "u", "e", "o"};
        List<String> vowelList = Arrays.asList(listVowels);

        Map<Character, Integer> vowels = new HashMap<>();
        Map<Character, Integer> consonants = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (vowelList.contains(String.valueOf(c))) {
                vowels.put(c, vowels.getOrDefault(c, 0) + 1);
                maxVowel = Math.max(maxVowel, vowels.get(c));
            } else {
                consonants.put(c, consonants.getOrDefault(c, 0) + 1);
                maxConsonant = Math.max(maxConsonant, consonants.get(c));
            }
        }
        return maxVowel + maxConsonant;
    }
}